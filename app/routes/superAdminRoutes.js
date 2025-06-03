const express = require("express");
const router = express.Router();
const {newAdmin,getAdmin,getAllAdmin,deleteAdmin,updateAdmin} = require("../controllers/superAdminController")
const isSuperAdminAuthenticated = require("../middleware/superAdminMiddleware")
const authMiddleware = require("../middleware/authMiddleware")

router.use(authMiddleware,isSuperAdminAuthenticated)


router.post("/new-admin",newAdmin);
router.get("/admin",getAllAdmin);
router.get("/admin/:id",getAdmin);
router.delete("/admin/delete/:id",deleteAdmin);
router.put("/admin/update/:id",updateAdmin)


module.exports = router;