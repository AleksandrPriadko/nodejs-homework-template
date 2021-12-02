const { Contact } = require("../../model");

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    const newError = NotFound(`Contact with id=${contactId} not found`);
    next(newError);
  }
  res.json({
    status: "success",
    code: 200,
    message: `contact id=${contactId} deleted`,
  });
};

module.exports = { deleteContact };
