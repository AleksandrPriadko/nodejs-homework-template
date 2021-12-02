const validation = require("./validation");
const controllerWrapper = require("./controllerWrapper");
const authenticate = require("./authenticate");
const upload = require("./upload");
const getResizeImg = require("./resizeImg");

module.exports = {
  validation,
  controllerWrapper,
  authenticate,
  upload,
  getResizeImg,
};
