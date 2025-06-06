const express = require("express")
const router = express.Router();
const {updateRole,deleteRole,newRole,getAllRole} = require("../controllers/roleController")
const validate =require("../middleware/validate")
const  {roleSchema}  = require("../validations/roleValidation")
const isSuperAdminAuthenticated = require("../middleware/superAdminMiddleware")
const  authMiddleware = require("../middleware/authMiddleware")


router.use(authMiddleware,isSuperAdminAuthenticated)

router.post("/",validate(roleSchema),newRole);
router.get("/get",getAllRole);
router.delete("/delete/:id",deleteRole);
router.put("/update/:id",updateRole);



module.exports = router;