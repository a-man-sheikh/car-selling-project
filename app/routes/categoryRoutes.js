 const express = require("express");
const  {add} = require("../controllers/categoryController");
 const router = express.Router();
const {isAdmin} = require("../middleware/adminMiddleware");
const authMiddleware = require("../middleware/authMiddleware")

router.use(authMiddleware,isAdmin);
 router.post("/category/add",add);
 

 module.exports = router;