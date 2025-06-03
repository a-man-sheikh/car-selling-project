const Admin = require("../models/adminModels");
const bcrypt = require("bcryptjs")

const newAdmin = async (req,res)=>{
      const {email,password,phoneNumber,name} = req.body;
      try {
        const existing = await Admin.findOne({email})
        if(existing){
          res.status(400).json({msg:"already exits",success:false})
        }
  
        const hashedPassword =await  bcrypt.hash(password,7)
        const admin = await new Admin({email,password:hashedPassword,phoneNumber} )
         
        await admin.save()
        res.status(201).json({message:"admin has created",success:true})
      } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error!",success:false})
        
      }
}

const getAllAdmin = async(req,res)=>{
  try {
      const admin = await Admin.find({accountType:"admin"}).select("-password")
      if(!admin){
          res.status(404).json({message:"Admin Not Found",success:false})
  
      }
   res.status(200).json({message:"All Admins Fetched",data:admin,success:true})
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Server Error !!!",success:false,error:error});
    
  }
}

const getAdmin = async(req,res)=>{
     const {id} = req.params;
   
try {
   
        if(!id){
            res.status(400).json({message:"id not found or Invalid id ",success:false})
        }
        const admin = await Admin.findById(id).select("-password");
        if(!admin){
            res.status(404).json({message:"Not Found",success:false})
        }
        res.status(200).json({message:"Admin fatched",data:admin,success:true})
} catch (error) {
    console.log(error);
    res.status(500).json({message:"Server Error !!!",success:false,error:error});
    
}
}
const deleteAdmin =  async(req,res)=>{
    const {id} = req.params
  try {
      const admin = await Admin.findByIdAndDelete(id);
      if(!admin){
        res.status(404).json({message:"Not Found",success:false})
      }
      res.status(200).json({message:"Admin has been deleted ",success:false})
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Server Error !!!",success:false,error:error});
    
  }


}
const updateAdmin= async(req,res)=>{
    const {id} = req.params;
          const updates = req.body;
          console.log(updates)
          console.log(id)
       try {
           if(updates.password){
            updates.password = await bcrypt.hash(updates.password,10)
           }
           const update=await Admin.findByIdAndUpdate(id,updates,{new:true}).select("-password")
           console.log(updates)
           if(!updates){
             res.status(400).json({message:"Admin is not updated",success:false})
           }
 
           res.status(200).json({message:"Admin has been updated",data:update,success:true})
       } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server Error !!!",success:false,error:error});
        
        
       }
    }
       
       module.exports = {newAdmin,getAdmin,getAllAdmin,deleteAdmin,updateAdmin}