const isAdmin = (req,res,next)=>{
    console.log(req.admin.accountType)

try {
        if(req.admin.accountType !== "admin"){
            res.status(403).json({message:"admin can only access"})
        }
} catch (error) {
    console.error(error)
    res.status(500).json({message:"Server Error"})
    
}
    next();
}

module.exports = {isAdmin}