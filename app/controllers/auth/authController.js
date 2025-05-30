const bcrypt = require("bcryptjs");
const Admin = require("../../models/adminModel");
const jwt = require("jsonwebtoken");
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email == " " || password == " ") {
      return res
        .status(401)
        .json({ message: "email and password both required", success: false });
    }

    const admin = await Admin.findOne({ email });
    console.log(admin)
    if (!admin || admin.accountType !== "admin") {
      return res.status(401).json({ message: "Access Denied", success: false });
    }
    const isMatch = await bcrypt.compare(password,admin.password)
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    //generate token
    const accessToken = jwt.sign(
      {
        id: admin._id,
        accountType: admin.accountType,
        email: admin.email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
    res
      .status(400)
      .json({ message: "Login Done", Token: accessToken,  success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = { loginAdmin };
