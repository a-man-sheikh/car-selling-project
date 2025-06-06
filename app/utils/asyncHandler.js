const { errorResponse } = require("./responseHandler");

module.exports = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch((error) =>
    errorResponse(res, 500, "Server Error", error.message || error)
  );
