// insertAdmin.js

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./app/models/adminModels"); // update the path accordingly

mongoose
  .connect(`mongodb://localhost:27017/car-sell-db`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
     const plainPassword = "securepassword123";
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    const admin = new Admin({
      name: "Aman shiekh",
      email: "amanshiekh786@gmail.com",
      password: hashedPassword, // ideally should be hashed
      accountType: "superadmin",
      phoneNumber: "9617505456",
    
    });

    await admin.save();
    console.log("Admin inserted successfully");
    process.exit();
  })
  .catch((err) => {
    console.error("Error inserting admin:", err);
    process.exit(1);
  });
