const { NODE_ENV } = require("../config/env");

const errorHandler = (err, req, res, next) => {
  
  let errStatus = res.statusCode || 500;
  let errMessage = err.message || "An issue occured while processing your request, try again later";

  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: NODE_ENV == "production" ? null : err.stack
  })
}

module.exports = errorHandler;