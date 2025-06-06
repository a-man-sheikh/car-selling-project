const Admin = require("../models/adminModels");
const bcrypt = require("bcryptjs");
const asyncHandler = require("../utils/asyncHandler");
const {successResponse,errorResponse} = require("../utils/responseHandler")

const newAdmin =asyncHandler( async (req, res) => {
  const { email, password, phoneNumber, name } = req.body;
    const existing = await Admin.findOne({ email });
    if (existing) {
      return errorResponse(res,400,"Admin already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 7);
    const admin = await new Admin({
      email,
      password: hashedPassword,
      phoneNumber,
    });

    await admin.save();
    return successResponse(res,200,"Admin has been created ")

});

const getAllAdmin =asyncHandler( async (req, res) => {

    const admin = await Admin.find({ accountType: "admin" }).select(
      "-password -otp"
    );
    if (!admin) { 
     return errorResponse(res,400,"No admins found")
    }
   return successResponse(res,200,"Admin fetched",admin)
  
});

const getAdmin = asyncHandler( async (req, res) => {
  const { id } = req.params;


    if (!id) {
        return errorResponse(res,400,"Id not Found or Invalid Id ")
    }
    const admin = await Admin.findById(id).select("-password -otp");
    if (!admin) {
      return errorResponse(res,404,"Not Found")
    }
  

      return successResponse(res,200,"Admin Fatched",admin)
  
});
const deleteAdmin =asyncHandler( async (req, res) => {
  const { id } = req.params;
  
    const admin = await Admin.findByIdAndDelete(id);
    if (!admin) {
      return errorResponse(res,404,"Admin Not Found")
    }
  
      return successResponse(res,200,"Admin has been deleted")
  
});
const updateAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }
    const update = await Admin.findByIdAndUpdate(id, updates, {
      new: true,
    }).select("-password -otp");
    console.log(updates);
    if (!updates) {
      return errorResponse(res,400,"Admin is not updated")
    }
    return successResponse(res,200,"Admin has been updated",update)
  
});
module.exports = { newAdmin, getAdmin, getAllAdmin, deleteAdmin, updateAdmin };
