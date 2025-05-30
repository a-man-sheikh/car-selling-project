const express = require("express");
const {addCarDetails} = require("../controllers/adminController")
const {isAdmin} = require("../middleware/isAdminMiddleware")
const {verifyToken} = require("../middleware/authMiddleware")
const router = express.Router();

router.use(verifyToken,isAdmin)

//@api name : add car details
//@api method : post 
//@api endpoint : /api/admin/car
router.post("/car",addCarDetails)

module.exports = router