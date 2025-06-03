const Admin = require("../models/adminModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { generateOTP, otpExpiryTime } = require("../utils/otp");
const sendEmail = require("../utils/sendEmail");
const generateEmailTemplate = require("../helpers/generateEmailTemplate")

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin || !(await bcrypt.compare(password, admin.password)))
    return res.status(400).json({ msg: "Invalid credentials" });

  const otp = generateOTP();
  admin.otp = { code: otp, expiresAt: otpExpiryTime() };
  await admin.save();

const message = generateEmailTemplate(otp);
    await sendEmail({ email, subject: "Your Verification Code", message });
  res.json({ msg: "OTP sent to email" });
};

exports.verifyLoginOTP = async (req, res) => {
  const { email, otp } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin || admin.otp.code !== otp || admin.otp.expiresAt < Date.now())
    return res.status(400).json({ msg: "Invalid or expired OTP" });

  admin.otp = { code: "", expiresAt: 0 };
  await admin.save();

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.json({ token, admin });
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(400).json({ msg: "Admin not found" });

  const otp = generateOTP();
  admin.otp = { code: otp, expiresAt: otpExpiryTime() };
  await admin.save();
const message = generateEmailTemplate(otp);
    await sendEmail({ email, subject: "Your Verification Code", message });
  res.json({ msg: "OTP sent to email" });
};

exports.resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin || admin.otp.code !== otp || admin.otp.expiresAt < Date.now())
    return res.status(400).json({ msg: "Invalid or expired OTP" });

  admin.password = await bcrypt.hash(newPassword, 10);
  admin.otp = { code: "", expiresAt: 0 };
  await admin.save();

  res.json({ msg: "Password reset successfully" });
};
