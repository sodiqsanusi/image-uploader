const errorMiddleware = (err, req, res, next) => {
  let errStatus = res.status || 500;
  let errMessage = err.message || "An issue occured while processing your request, try again later"

  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
  })
}

module.exports = errorMiddleware;