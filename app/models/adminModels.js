const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase:true
  },
  password: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    default: "admin", // superadmin or admin
  },
  phoneNumber: {
    type: String,
    default: null,
  },

  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },

  otp: {
    code: { type: String, default: "" },
    expiresAt: { type: Number, default: 0 },
  },
});
adminSchema.set("timestamps", true);
module.exports = mongoose.model("Admin", adminSchema);
