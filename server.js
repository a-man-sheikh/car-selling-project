const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./app/routes/authRoutes");
const superAdminRoutes = require("./app/routes/superAdminRoutes")
const roleRoutes = require("./app/routes/roleRoutes")
const categoryRoutes = require("./app/routes/categoryRoutes")
const env = require("dotenv");
const app = express();


env.config({path:".env"})
// app.use(cors({
// origin:[process.env.FRONTEND_URL],
//     method:["GET","POST","DELETE","PUT","PATCH"],
//     credentials:true
// }
// ))

app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api/auth/super/admin", authRoutes);
app.use("/api/super/admin",superAdminRoutes);
app.use("/api/super/role",roleRoutes);

app.use("/api/admin",categoryRoutes);
  const hostname = '192.168.29.147'; // Replace with your IP
 
const port = process.env.PORT
mongoose
  .connect(`${process.env.MONGO_URI}/car-sell-db`)
  .then(() => {
    console.log("MongoDb connected");
       app.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
  })
  .catch((err) => console.error(err));