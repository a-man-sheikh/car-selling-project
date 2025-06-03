const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModels");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await Admin.findById(decoded.id).select("-password");
    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  }
};
