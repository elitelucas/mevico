const httpStatus = require('http-status');
const User = require('../models/user.model');
const Admin = require('../models/admin.model');
const Patient = require('../models/patient.model');
const RefreshToken = require('../models/refreshToken.model');
const moment = require('moment-timezone');
const { jwtExpirationInterval } = require('../../config/vars');

/**
 * Returns a formated object with tokens
 * @private
 */
function generateTokenResponse(user, accessToken) {
  const tokenType = 'Bearer';
  const refreshToken = RefreshToken.generate(user).token;
  const expiresIn = moment().add(jwtExpirationInterval, 'minutes');
  return {
    tokenType,
    accessToken,
    refreshToken,
    expiresIn,
  };
}

/**
 * Returns jwt token if registration was successful
 * @public
 */
exports.register = async (req, res) => {
  let userModel;
  try {
    const userData = req.body;
    userModel = userData.role === 'Admin' ? Admin : User;
    userData.cmp = userModel === Admin ? '-' : userData.cmp;
    const user = await new userModel(userData).save();
    const userTransformed = user.transform();
    const token = generateTokenResponse(user, user.token());
    return res.json({ token, user: userTransformed, status: httpStatus.CREATED });
  } catch (error) {
    console.log("register:",error);
    return res.json(userModel.checkDuplicateField(error));
  }
};

/**
 * Returns jwt token if valid username and password is provided
 * @public
 */
exports.login = async (req, res, next) => {
  try {
    const userData = await User.findOne({'email': req.body.email});
    const userModel = userData ? User : Admin;
    const { user, accessToken } = await userModel.findAndGenerateToken(req.body);
    const token = generateTokenResponse(user, accessToken);
    console.log(token);
    console.log(accessToken);
    const userTransformed = user.transform();
    return res.json({ token, user: userTransformed });
  } catch (error) {
    return next(error)
  }
};



/**
 * @api post v1/auth/verify-email
 *When user click the link in his email
 */

exports.verifyEmail = async (req, res, next) => {
  try{
    const fakeToken = req.params.token;
    const buff =  Buffer.from(fakeToken, 'base64')
    const email = buff.toString('utf-8');
    const user = await User.findOne({email: email});
    const userModel = user ? User : Admin;
    await userModel.findOneAndUpdate({email: email}, {status: "active"}, {new: true}).then(result => {
      //res.status(200).json(result);
      res.redirect('http://localhost:4200/auth/sign-in');
    })
  } catch(e) {
    return next(e)
  }
};

/**
 * @api post v1/auth/verify-sms
 * When user verify with code using his phone number
 *
 * */
exports.verifySMS = async (req, res, next) => {
  try{
    const smsCode = req.body.code.smsCode;
    const fakeToken = req.body.token;
    const token = Buffer.from(fakeToken, 'base64');
    const phoneNumber = token.toString('utf-8');
    const user = await User.findOne({phoneNumber: phoneNumber});
    const userModel = user ? User : Admin;
    await userModel.findOneAndUpdate({phoneNumber: phoneNumber, smsCode: smsCode},{status: "active"}, {new: true}).then(result => {
      res.status(200).json(result)
    });
  } catch(e) {
    return next(e);
  }
};

/***
 * @api post v1/auth/join
 * @param req patientData
 * @param res
 * @param next
 */

exports.join = async (req, res, next) => {
  try {
    const patientData = req.body;
    const patient = await new Patient(patientData).save();
    if (patient) res.status(httpStatus.CREATED).json(patient);

  } catch (e) {
    return next(Patient.checkDuplicateField(e))
  }
};

/***
 * @api post v1/auth/join/validate
 * @param req patientData
 * @param res
 * @param next
 */

exports.joinValidate = async (req, res, next) => {
  try {
    const patientData = req.body;
    const patient = await new Patient(patientData).save();
    if (patient) res.status(httpStatus.CREATED).json(patient);

  } catch (e) {
    return next(Patient.checkDuplicateField(e))
  }
};
