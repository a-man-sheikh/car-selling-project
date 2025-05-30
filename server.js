const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./app/routes/authRoutes")
const adminRoutes = require("./app/routes/adminRoutes")
const env = require("dotenv")
const app = express();

env.config({path:".env"})
app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/admin",adminRoutes)

const port = process.env.PORT
mongoose
  .connect(`${process.env.MONGO_URI}/car-sell-db`)
  .then(() => {
    console.log("MongoDb connected");
    app.listen(port, () => console.log(`port is running on ${port}`));
  })
  .catch((err) => console.error(err));