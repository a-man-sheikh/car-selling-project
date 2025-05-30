const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
    makerName : {
        type:String, //honda suziki
        
    },
    model:String, //2022
    registerNumber:String,
    year:Number,
    price:Number,
    color:String,
    kilometerDriven:Number,
    fuelType:{
        type:String,
        enum:["Petrol","Diesel","CNG","Electric"],
        default:"Diesel"
    },
    transmission:{
        type:String,
        enum:["Munual","Automatic"],
        default:"Munual"

    },
    ownerCount:{
        type:Number,
        default:0
    },
    description : String,
    images:{
        type:[String]//cloudinary or other url

    },
    status:{
        type:String,
        enum:["available","sold","pending"],
        default:"available",
    }

    },
{
    timestamps:true
})

module.exports = mongoose.model("Car",carSchema);