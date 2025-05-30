const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
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
        type:String,//hash password
        required:true,
    },
    accountType:{
        type:String,
        default:"admin", // superadmin or admin
    },
    phoneNumber:{
        type:String,
        default:null,
    }
})
module.exports = mongoose.model("Admin",adminSchema)