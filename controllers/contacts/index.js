const { getAllContacts } = require("./getAllContacts");
const { getByIdContact } = require("./getByIdContact");
const { addContactInItem } = require("./addContact");
const { deleteContact } = require("./deleteContact");
const { updContact } = require("./updContact");
const { patchContact } = require("./patchContact");

module.exports = {
  getAllContacts,
  getByIdContact,
  addContactInItem,
  deleteContact,
  updContact,
  patchContact,
};
