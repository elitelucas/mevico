const express = require('express');
const router = express.Router();
const controller = require('../../controllers/patient.controller');
const { authorize } = require('../../middlewares/authPatient');



router.route('/initPatients')
  .get(authorize(), controller.getInitPatients);

router.route('/filterPatients/:providerId/:filterValue/:key')
  .get(authorize(), controller.getFilterPatients);


router.route('/consult/:patientId')
  .get(authorize(), controller.getInitConsult);

router.route('/consult/provider/:providerId')
  .get(authorize(), controller.getConsultByProvider);

router.route('/consult/patient/:patientId')
  .get(authorize(), controller.getConsultByPatient);

router.route('/oneConsult')
  .get(authorize(), controller.getOneConsult);

router.route('/consultInChat')
  .get(authorize(), controller.getConsultInChat);

router.route('/uploadFile')
  .post(authorize(), controller.fileUpload);


router.route('/download/:receiver/:fileName')
  .get(authorize(), controller.download);

router.route('/mail')
  .post(authorize(), controller.mail);


router.route('/updateConsult')
  .put(authorize(), controller.updateConsult)

router.route('/ckImage')
  .post(authorize(), controller.uploadCkImage)

router.route('/getSignature/:providerId')
  .get(authorize(), controller.getSignature)

//I added end
router.route('/patientByField')
  .get(authorize(), controller.getPatient);

router.route('/checkPatient/:dni')
  .get(authorize(), controller.checkPatient);

router.route('/postPatient')
  .put(authorize(), controller.postPatient);

/**
 * @api v1/provider/patient
 * @param patientData
 * */

router.route('/patient')
  .put(authorize(), controller.updatePatient)

router.route('/patient/chart')
  .put(authorize(), controller.updatePatientOnChart)

router.route('/patient/disconnect/:patientId')
  .put(authorize(), controller.disconnectPatient)

/**
 * @api v1/provider/patients-waiting/:room
 * @param no
 * */

router.route('/patients-waiting/:room')
  .get(/*authorize(),*/ controller.getWaitingPatientsData);

/**
 * @api v1/provider/patients-waiting/:room
 * @param no
 * */

router.route('/patients-disconnect/:room')
  .get(/*authorize(),*/ controller.getDisconnectPatientsData);

/**
 * @api v1/provider/patients-recent
 * */

router.route('/patients-recent')
  .get(authorize(), controller.getRecentPatientsData);

/**
 * @api v1/provider/patients-all/:room
 * @param id
 * */
router.route('/patients-all/:room')
  .get(authorize(), controller.getAllPatientsData);
/**
 * @api v1/provider/resetState
 * @params model, field 'to reset'
 * */

router.route('/resetState')
  .patch(authorize(), controller.resetState);


/**
 * @api v1/provider/checkout
 * */
router.route('/checkout')
  .post(authorize(), controller.checkout);


/**
 * @api v1/provider/checkout
 * */
router.route('/charge')
  .post(authorize(), controller.charge);

/**
 * @api v1/provider/subcription
 * */
router.route('/subcription')
  .post(authorize(), controller.subcriptionPlanWithCard);

/**
 * @api v1/provider/sendMail
 * */
router.route('/sendMail')
  .post(controller.mail);

/**
   * @api v1/provider/subcription
   * */
router.route('/subcription/:providerid')
  .delete(authorize(), controller.unsubscribePlanWithCard);

router.route('/card/:providerId')
  .get(authorize(), controller.getCard)

router.route('/card')
  .put(authorize(), controller.updateCard)

router.route('/card/:cardId')
  .delete(authorize(), controller.removeCard)

/**
 * @api v1/provider/notify
 * */
router.route('/notify')
  .post(authorize(), controller.notify)

/**
 * @api v1/provider/chart
 * @method put
 * */
router.route('/chart')
  .put(authorize(), controller.editChart);

/**
 * @api v1/provider/chart/:dni
 * @method get
 * */
router.route('/getChart/:patientDni')
  .get(authorize(), controller.getChart);

/**
 * @api v1/provider/consult
 * @method post
 * */
router.route('/consult')
  .post(authorize(), controller.createConsult);
/**
 * @api v1/provider/consult
 * @method post
 * */
router.route('/consult/:userId')
  .get(authorize(), controller.getLastAttetions);

/**
 * @api v1/provider/consult
 * @method post
 * */
router.route('/consult/:consultId/close')
  .patch(authorize(), controller.closeConsult);


/**
 * @api v1/provider/consult
 * @method post
 * */
router.route('/feedback')
  .post(authorize(), controller.createFeedback);

/**
   * @api v1/provider/feedback
   * @method get
   * */
router.route('/feedback/:providerId')
  .get(controller.getFeedBacks);


module.exports = router;
