const { registrationUser } = require("./register");
const login = require("./login");
const logout = require("./logout");
const current = require("./current");
const subscription = require("./subscription");
const avatar = require("./avatar");
const verify = require("./verify");
const resendEmail = require("./resendEmail");

module.exports = {
  registrationUser,
  login,
  logout,
  current,
  subscription,
  avatar,
  verify,
  resendEmail,
};
