// const dotenv = require("dotenv")
// const connectDB = require("../db/index")



// dotenv.config({path:"./.env"})

// connectDB()

// const express = require("express")
// const  app = express()

// ;(async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGO_URI}${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("ERORR: ",error);
//         throw error
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listenin g on port ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.error("ERROR: ",error)
//         throw error
        
//     }

// })()