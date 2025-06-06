const asyncHandler = require("../utils/asyncHandler");
const {errorResponse,successResponse} = require("../utils/responseHandler")
const Category = require("../models/categoryModel")


const add = asyncHandler(async (req,res)=>{
    const {name,description} = req.body;
 const adminId = req.admin?._id;
  if (!adminId) {
    return errorResponse(res, 401, "Unauthorized");
  }
      const existing = await Category.findOne({ name });
        if (existing) {
          return errorResponse(res,400,"Category already exists");
        }
    const data = await new Category({name,description,createdBy:adminId});
     await data.save();
    return successResponse(res,201,"Category has been created",data)
});


const remove = asyncHandler(async (req,res)=>{
    const id = req.params
    const data = await Category.findByIdAndDelete(id);
    if(!data){
        return errorResponse(res,404,"Category not found");

    }
    return successResponse(res,200,"Category has been deleted");

})

const update = asyncHandler(async (req,res)=>{
     const {name,description} = req.body;
    const adminId = req.admin?._id;
     const id = req.params

       if (!adminId) {
    return errorResponse(res, 401, "Unauthorized");
  }
    const data = await Category.findByIdAndUpdate(id,{name,description,createdBy:adminId});
     return success
})
module.exports = {add};
