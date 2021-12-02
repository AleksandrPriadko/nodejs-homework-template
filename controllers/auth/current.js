const { User } = require("../../model");

const current = async (req, res) => {
  const { _id, email, subscription } = req.user;
  await User.findById(_id);

  res.json({
    status: "Success",
    code: 200,
    data: {
      email,
      subscription,
    },
  });
};

module.exports = current;
