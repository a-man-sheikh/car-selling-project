const isSuperAdminAuthenticated = (req,res,next)=>{
   
    if(req.admin?.accountType !== "superadmin"){
        res.status(403).json({message:"Access Denied , super Admins Only",success:false})
    }
    next();
}

module.exports = isSuperAdminAuthenticated