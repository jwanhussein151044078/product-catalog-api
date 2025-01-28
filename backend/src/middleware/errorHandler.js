const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode != 200 ? res.statusCode : err.statusCode ? err.statusCode : 500;
  switch (statusCode) {
    case 500:
      res.status(statusCode).json({
        status:false,
        title: "ERROR",
        message: "Internal Server Error",
      })
      break;
    default :
      res.status(statusCode).json({
        status:false,
        title: "ERROR",
        message: err.message,
      })
      break; 
  }
};

module.exports = errorHandler;