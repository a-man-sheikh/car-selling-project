const jwt = require("jsonwebtoken")

const verifyToken = async (req,res,next)=>{
    const token = req.header("auth")
    console.log(token)
    if(!token){
        return res.status(401).json({message:"token not found",success:true})
    }
   try {
     decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
     console.log(decoded)
     req.admin = decoded;
     next()
   } catch (error) {
     return res.status(500).json({message:"a"})
    
   }
}

module.exports = {verifyToken}