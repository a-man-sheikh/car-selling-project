const express = require("express");
const router = express.Router();
const {
  newAdmin,
  getAdmin,
  getAllAdmin,
  deleteAdmin,
  updateAdmin,
} = require("../controllers/superAdminController");
const validate = require("../middleware/validate");
const { adminRegisterSchema ,adminUpdateSchema} = require("../validations/adminValidation");
const isSuperAdminAuthenticated = require("../middleware/superAdminMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware, isSuperAdminAuthenticated);

router.post("/new-admin", validate(adminRegisterSchema), newAdmin);
router.get("/", getAllAdmin);
router.get("/:id", getAdmin);
router.delete("/delete/:id", deleteAdmin);
router.put("/update/:id",validate(adminUpdateSchema), updateAdmin);

module.exports = router;
