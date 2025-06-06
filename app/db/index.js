// const mongoose = require("mongoose")
// const DB_NAME = require("../utils/constants")



// const connectDB = async()=>{
//     try{
//         const connectionInstance = await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     }
//     catch(error){
//         console.log("MONGODB connection error",error)
//         process.exit(1)
//     }
// }

// module.exports = connectDB