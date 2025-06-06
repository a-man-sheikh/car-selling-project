const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
         name:{
            type:String
         },
         email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
         },
         password:{
            type:String,
            required:true,
         },
         phoneNumber:{
            type:String,
            required:true
         },
         accountType:{
            type:String,
            default:"buyer",//seller or buyer
         }
    },{timestamps:true}
)

module.exports = mongoose.model("User",userSchema)