const Admin = require(
    "../models/adminModels"
)

const isPermitted = async (requiredPermission)=>{
  return async (req,res,next)=>{ 
   try {
      const admin = await Admin.findById(req.id).populate("role")
      if(!admin){
        return res.status(404).json({message:"Not Found",})
      }
      if(!admin.role || !admin.permission.includes(requiredPermission) ){
        return res.status(403).json({message:"Not Permitted !!",success:false})
      }
      res.status(200).json({success:true})
      next();
   } catch (error) {
    res.status(500).json({message:"Server Error",error:error})
    
   }
    }
}

module.exports = isPermitted;