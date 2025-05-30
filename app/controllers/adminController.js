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

module.exports = {addCarDetails};