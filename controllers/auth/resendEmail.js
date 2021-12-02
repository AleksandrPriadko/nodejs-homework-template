const { BadRequest } = require("http-errors");
const { nanoid } = require("nanoid");

const { User } = require("../../model");
const sendMailVerify = require("../../helpers");

const resendEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new BadRequest("missing required field email");
  }
  if (user.verify) {
    throw new BadRequest("Verification has already been passed");
  }
  const verificationToken = nanoid();
  const mail = {
    to: email,
    subject: "Confirmation of registration",
    html: `<a href='http://localhost:3000/api/users/verivy/${verificationToken}'>Verify Email Now</a>`,
  };
  await sendMailVerify(mail);

  res.json({
    code: 200,
    message: "Verification email sent",
  });
};

module.exports = resendEmail;
