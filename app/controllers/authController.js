const Admin = require("../models/adminModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("../utils/asyncHandler");
const { successResponse, errorResponse } = require("../utils/responseHandler");
const { generateOTP, otpExpiryTime } = require("../utils/otp");
const sendEmail = require("../utils/sendEmail");
const generateEmailTemplate = require("../helpers/generateEmailTemplate");

exports.login = asyncHandler(async (req, res) => {

  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin || !(await bcrypt.compare(password, admin.password))){

    return errorResponse(res, 400, "Invalid Credentials");
  }

  // const otp = generateOTP();
  // admin.otp = { code: otp, expiresAt: otpExpiryTime() };
  // await admin.save();

  // const message = generateEmailTemplate(otp);
  // await sendEmail({ email, subject: "Your Verification Code", message });
  // res.json({ msg: "OTP sent to email" });
  // return successResponse(res, 200, "OTP sent to email");

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  }); 
  return successResponse(res, 200,"Login successfully",{token:token});
});

// exports.verifyLoginOTP = asyncHandler(async (req, res) => {
//   const { email, otp } = req.body;
//   const admin = await Admin.findOne({ email });
//   if (!admin || admin.otp.code !== otp || admin.otp.expiresAt < Date.now())
//     return errorResponse(res, 400, "Invalid OTP or Expired OTP");

//   admin.otp = { code: "", expiresAt: 0 };
//   await admin.save();

//   const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
//     expiresIn: "1d",
//   });
//   return successResponse(res, 200, { token, admin });
// });

exports.forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin) {
    return errorResponse(res, 400, "Admin Not Found");
  }

  const otp = generateOTP();
  admin.otp = { code: otp, expiresAt: otpExpiryTime() };
  await admin.save();
  const message = generateEmailTemplate(otp);
  await sendEmail({ email, subject: "Your Verification Code", message });
  res.json({ msg: "OTP sent to email" });
  return successResponse(res, 200, "OTP sent to email");
});

exports.resetPassword = asyncHandler(async (req, res) => {
  const { email, otp, newPassword } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin || admin.otp.code !== otp || admin.otp.expiresAt < Date.now()) {
    return errorResponse(res, 400, "Invalid or expired OTP");
  }

  admin.password = await bcrypt.hash(newPassword, 10);
  admin.otp = { code: "", expiresAt: 0 };
  await admin.save();
  return successResponse(res, 200, "Password Reset successfully");
});
