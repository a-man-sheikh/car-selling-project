const express = require("express");
const {addCarDetails,getCarAllDetails} = require("../controllers/adminController")

const {isAdmin} = require("../middleware/isAdminMiddleware")
const {verifyToken} = require("../middleware/authMiddleware")
const router = express.Router();

router.use(verifyToken,isAdmin)

//@api name : add car details
//@api method : post 
//@api endpoint : /api/admin/car
router.post("/car",addCarDetails)

//@api name : get car details
//@api method : get 
//@api endpoint : /api/admin/car
router.get("/car",getCarAllDetails)

module.exports = router