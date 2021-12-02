const { BadRequest } = require("http-errors");

const validation = (schema) => {
  const validationMiddlewares = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const newError = new BadRequest(error.message);
      next(newError);
    }
    next();
  };
  return validationMiddlewares;
};

module.exports = validation;
