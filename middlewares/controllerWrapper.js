const controllerWrapper = (auth) => {
  const controller = async (req, res, next) => {
    try {
      await auth(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return controller;
};

module.exports = controllerWrapper;
