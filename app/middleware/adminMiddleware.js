const isAdmin = (req, res, next) => {
  if (req.admin?.accountType !== "admin") {
    res
      .status(403)
      .json({ message: "Access Denied , Admin Only", success: false });
  }
  next();
};

module.exports = {isAdmin}