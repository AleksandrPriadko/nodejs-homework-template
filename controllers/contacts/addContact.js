const { Contact } = require("../../model");

const addContactInItem = async (req, res) => {
  const newContact = { ...req.body, owner: req.user._id };

  const result = await Contact.create(newContact);
  res.status(201).json({
    status: "Success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = { addContactInItem };
