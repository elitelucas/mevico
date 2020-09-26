const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { omitBy, isNil } = require('lodash');
const bcrypt = require('bcryptjs');
const moment = require('moment-timezone');
const jwt = require('jwt-simple');
const uuidv4 = require('uuid/v4');
const APIError = require('../utils/APIError');
const { env, jwtSecret, jwtExpirationInterval } = require('../../config/vars');
const { string } = require('joi');

/**
* User Roles
*/
const roles = ['Admin', 'Dr', 'Mr', 'Mrs', 'Miss', 'Ms', 'Other', 'SuperAdmin'];

/**
 * User Schema
 * @private
 */
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 128,
  },
  firstName: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
    default: ''
  },
  lastName: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
    default: ''
  },
  services: {
    facebook: String,
    google: String,
  },
  role: {
    type: String,
    enum: roles,
  },
  cmp: {
    type: Number,
    unique: true,
    trim: true,
    lowercase: true,
  },
  socketId: {
    type: String,
  },
  room: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  permission: {
    type: String,
    lowercase: false,
    default: "pending"
  },
  status: {
    type: String,
    lowercase: true,
    default: "inactive"
  },
  state: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
    default: ''
  },

  smsCode: {
    type: Number
  },

  peerId: {
    type: String
  },
  connection: {
    type: Boolean,
    default: false
  },
  calling: {
    type: Boolean,
    default: false
  },
  sigImgSrc:{
    type:String,
    default:''
  },
  payMethod:{
    type:Object
  },
  blog:{
    type:Array
  },
  address: {
    type: String
  },
  address_city: {
    type: String
  },
  country_code: {
    type: String
  },
  customerId: {
    type: String
  },
  subcriptionId: {
    type: String
  },
}, {
  timestamps: true,
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */
userSchema.pre('save', async function save(next) {
  try {
    if (!this.isModified('password')) return next();

    const rounds = env === 'test' ? 1 : 10;

    const hash = await bcrypt.hash(this.password, rounds);
    this.password = hash;

    return next();
  } catch (error) {
    return next(error);
  }
});

/**
 * Methods
 */
userSchema.method({
  transform() {
    const transformed = {};
    const fields = ['id', 'firstName', 'lastName', 'email','phoneNumber', 'room', 'cmp', 'socketId', 'peerId', 'role','permission', 'status', 'state', 'image','connection','calling', 'createdAt'];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },

  token() {
    const playload = {
      exp: moment().add(jwtExpirationInterval, 'minutes').unix(),
      iat: moment().unix(),
      sub: this._id,
    };
    return jwt.encode(playload, jwtSecret);
  },

  async passwordMatches(password) {
    console.log("passwordMatches")
    console.log(password)
    console.log(this.password)

    return bcrypt.compare(password, this.password);
  },
});

/**
 * Statics
 */
userSchema.statics = {

  roles,

  /**
   * Find user by email and tries to generate a JWT token
   *
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  async findAndGenerateToken(options) {
    const { email, password, refreshObject } = options;
    if (!email) throw new APIError({ message: 'An email is required to generate a token' });
    console.log("findAndGenerateToken")
    console.log("email")
    console.log(email)
    console.log("password")
    console.log(password)

    const user = await this.findOne({ email }).exec();
    const err = {
      status: httpStatus.UNAUTHORIZED,
      isPublic: true,
    };
    if (password) {
      if (user && await user.passwordMatches(password)) {
        return { user, accessToken: user.token() };
      }
      err.message = 'Incorrect email or password';
    } else if (refreshObject && refreshObject.userEmail === email) {
      if (moment(refreshObject.expires).isBefore()) {
        err.message = 'Invalid refresh token.';
      } else {
        return { user, accessToken: user.token() };
      }
    } else {
      err.message = 'Incorrect email or refreshToken';
    }
    throw new APIError(err);
  },

  /**
   * List users in descending order of 'createdAt' timestamp.
   *
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @returns {Promise<User[]>}
   */
  list({
    page = 1, perPage = 30, id, firstName, lastName, room, cmp, socketId, peerId, email, role,permission, status, state, date
  }) {
    const options = omitBy({ id, firstName, lastName, room, cmp, socketId, peerId, email, role,permission, status, state, date}, isNil);

    return this.find(options)
    .sort({ createdAt: -1 })
    .skip(perPage * (page - 1))
    .limit(perPage)
    .exec();
  },

  /**
   * Return new validation error
   * if error is a mongoose duplicate key error
   *
   * @param {Error} error
   * @returns {Error|APIError}
   */
  checkDuplicateField(error) {
    let field = '';
    for(let key in error.keyValue) {
      field = key;
    }
    if (error.name === 'MongoError' && error.code === 11000) {
      return new APIError({
        message: 'Validation Error',
        errors: [{
          field: field,
          location: 'body',
          messages: [field +' already exists'],
        }],
        status: httpStatus.CONFLICT,
        isPublic: true,
        stack: error.stack,
      });
    }
    return error;
  },

  async oAuthLogin({
    service, id, email, name, picture,
  }) {
    const user = await this.findOne({ $or: [{ [`services.${service}`]: id }, { email }] });
    if (user) {
      user.services[service] = id;
      if (!user.name) user.name = name;
      if (!user.picture) user.picture = picture;
      return user.save();
    }
    const password = uuidv4();
    return this.create({
      services: { [service]: id }, email, password, name, picture,
    });
  },
};

/**
 * @typedef User
 */
module.exports = mongoose.model('User', userSchema);
