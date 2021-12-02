const { NotFound } = require("http-errors");
const { User } = require("../../model");

const subscription = async (req, res) => {
  const { subscription } = req.user;
  const newSubscription = ["starter", "pro", "business"];
  if (!newSubscription.includes(req.body.subscription)) {
    throw new NotFound(`Subscription has not been updated!`);
  }
  const result = await User.findOneAndUpdate({ subscription }, req.body, {
    new: true,
  });

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = subscription;
