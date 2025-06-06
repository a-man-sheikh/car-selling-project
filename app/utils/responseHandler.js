exports.successResponse = (res,statusCode,message,data = {})=>{
    return res.status(statusCode).json({message,success:true,data});
}

exports.errorResponse = (res,statusCode,message,error = null)=>{
    return res.status(statusCode).json({message,success:false,error});
}