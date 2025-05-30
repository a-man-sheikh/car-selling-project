const Car = require("../models/carModel");

const addCarDetails = async (req,res)=>{
    const {makerName,model,registerNumber,year,price,color,kilometerDrive,description} = req.body

   try {
     const car = await new Car(req.body)
     car.save();
     if(!car){
       return   res.status(403).json("please inser valid data ")
     }
     res.status(200).json({message:"data has been saven",car,success:true})
   } catch (error) {
    console.error(error)
    res.status(500).json({message:"server error",success:false})
    
   }

}

const getCarAllDetails = async(req,res)=>{
    try {
        const car = await Car.find();
        if(!car){
            res.status(404).json({message:"Not Found",success:false})
        }
        res.status(200).json({message:"car details has been fetched",data:car,success:true})
    } catch (error) {

        console.error(error)
        res.status(500).json("Server Error !!")
        
    }
}

module.exports = {addCarDetails,getCarAllDetails};