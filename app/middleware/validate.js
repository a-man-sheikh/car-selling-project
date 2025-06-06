const validate = (schema)=>{
    return (req,res,next)=>{
        const {error} = schema.validate(req.body,{abortEarly:true}); //only first error
        if(error){
            return res.status(400).json({message:error.details[0].message,success:false});
        }
        next();
    };
};

module.exports = validate;