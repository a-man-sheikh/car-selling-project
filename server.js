const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./app/routes/authRoutes");
const superAdminRoutes = require("./app/routes/superAdminRoutes")
const env = require("dotenv");
const app = express();

env.config({path:".env"})
app.use(cors({
origin:[process.env.FRONTEND_URL],
    method:["GET","POST","DELETE","PUT","PATCH"],
    credentials:true
}
))
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use("/api/auth/admin", authRoutes);
app.use("/api/super/",superAdminRoutes)

const port = process.env.PORT
mongoose
  .connect(`${process.env.MONGO_URI}/car-sell-db`)
  .then(() => {
    console.log("MongoDb connected");
    app.listen(port, () => console.log(`port is running on ${port}`));
  })
  .catch((err) => console.error(err));