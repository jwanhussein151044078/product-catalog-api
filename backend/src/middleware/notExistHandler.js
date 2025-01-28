const CustomError = require("../utils/CustomError");

const notExistHandler = (req, res, next) => {
  next(new CustomError(`The requested URL ${req.originalUrl} does not exist.`,404))
};

module.exports = notExistHandler;