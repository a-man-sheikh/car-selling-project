const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const {
loginSchema,
  resetPasswordSchema,
  forgotPasswordSchema
} = require("../validations/adminValidation");
const {
  login,

  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

router.post("/login",validate(loginSchema) ,login);
// router.post("/login-verify", validate(otpVerifySchema), verifyLoginOTP);
router.post("/forgot-password",validate(forgotPasswordSchema),forgotPassword);
router.post("/reset-password", validate(resetPasswordSchema), resetPassword);

module.exports = router;
