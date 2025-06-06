const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        description :{
            type:String,
            default:"",
        },
        isActive:{
            type:Boolean,
            default:true
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Admin"
        }
    
    },{
        timestamps:true
    }
)

module.exports = mongoose.model("Category",categorySchema);