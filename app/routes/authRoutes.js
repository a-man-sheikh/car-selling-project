const express = require("express");
const router = express.Router();
const {
  login,
  verifyLoginOTP,
  forgotPassword,
  resetPassword
} = require("../controllers/authController");

router.post("/login", login);
router.post("/login-verify", verifyLoginOTP);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
