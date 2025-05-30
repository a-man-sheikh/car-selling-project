const express = require("express")
const {loginAdmin} = require("../controllers/auth/authController")

const router = express.Router();

//@api name: admin Login
//@api method: post 
//@api endpoint: /api/auth/admin/login
router.post("/admin/login",loginAdmin)

module.exports = router
