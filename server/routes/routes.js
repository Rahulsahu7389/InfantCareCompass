import express from "express";
const router = express.Router();

import signUp from '../controller/user/signUp.js'
import signIn from '../controller/user/signIn.js'
import authtoken from "../middleware/auth.js";
import consultation from '../controller/services/consultation.js'
import doctorinfo from "../controller/user/doctorInfo.js";
import logout from '../controller/user/logOut.js'
import roomIdNotification from '../controller/notification/mail_roomId.js'
import sendContactUsEmail from "../controller/notification/mail_contactUs.js";
import subscribeController from "../controller/notification/newsletter.js";
router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/logout', logout);
router.post('/consultation', authtoken, consultation);
router.get('/doctorinfo', doctorinfo);
router.post('/notify-doctor', roomIdNotification);
router.post("/contact-us", sendContactUsEmail);
router.post("/subscribe-newsletter",subscribeController);
export default router;


