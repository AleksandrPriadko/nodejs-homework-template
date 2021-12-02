const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { User } = require("../../model");
const sendMailVerify = require("../../helpers");

const registrationUser = async (req, res) => {
  const { email, password } = req.body;
  const avatarURL = gravatar.url(email, { s: "250" });
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`Email ${email} in use`);
  }
  const verificationToken = nanoid();
  const newUser = new User({ email, avatarURL, verificationToken });
  newUser.setPassword(password);
  await newUser.save();
  const mail = {
    to: email,
    subject: "Confirmation of registration",
    html: `<a href='http://localhost:3000/api/users/verivy/${verificationToken}'>Verify Email Now</a>`,
  };
  await sendMailVerify(mail);

  res.json({
    status: "Success",
    code: 201,
    data: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = {
  registrationUser,
};
