const Role = require("../models/roleModel");
const asyncHandler = require("../utils/asyncHandler");
const {successResponse,errorResponse} = require("../utils/responseHandler")



const newRole =asyncHandler( async (req, res) => {
  const { name, permissions } = req.body;
    const newRole = await new Role({ name, permissions });
    await newRole.save();
    return successResponse(res,201,"Role has been Created",newRole);
  
});
const getAllRole = asyncHandler( async (req, res) => {
    const getAllRole = await Role.find();

    if (!getAllRole) {


        return errorResponse(res,404,"Roles is not found");
    }
  
      return successResponse(res,200,"Role has been fatched",getAllRole);

});

const deleteRole = asyncHandler(async (req, res) => {
  const { id } = req.params;
    const role = await Role.findByIdAndDelete(id);
    if (!role) {
      return errorResponse(res,404,"Not Found");
    }
  
    return successResponse(res,200,"Role has been deleted");

});

const updateRole = asyncHandler( async (req, res) => {
  const updates = req.body;
  const { id } = req.params;


    const role = await Role.findByIdAndUpdate(id, updates, { new: true });

    if (!role) {
      return errorResponse(res,404,"Not Found");
    }
    res
      .status(200)
      .json({ message: "Role has been updated", success: true, data: role });
      return successResponse(res,200,"Role has been updated");
 
});

module.exports = { updateRole, deleteRole, newRole, getAllRole };
