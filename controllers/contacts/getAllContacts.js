const { Contact } = require("../../model");

const getAllContacts = async (req, res) => {
  const { _id } = req.user;

  const { favorite, page, limit } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find(
    { owner: _id },
    "_id name email phone favorite owner",
    { skip, limit: Number(limit) }
  );
  const filter = await contacts.filter((contact) => contact.favorite);
  const result = Boolean(favorite) ? filter : contacts;

  res.json({
    status: "Success",
    code: 200,
    data: { result },
  });
};

module.exports = { getAllContacts };
