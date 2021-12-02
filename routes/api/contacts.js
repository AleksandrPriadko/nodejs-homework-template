const express = require("express");
const router = express.Router();

const { contacts } = require("../../controllers");
const { joiContactSchema } = require("../../validations");
const {
  validation,
  controllerWrapper,
  authenticate,
} = require("../../middlewares");

router.get("/", authenticate, controllerWrapper(contacts.getAllContacts));

router.get(
  "/:contactId",
  authenticate,
  controllerWrapper(contacts.getByIdContact)
);

router.post(
  "/",
  authenticate,
  validation(joiContactSchema),
  controllerWrapper(contacts.addContactInItem)
);

router.delete("/:contactId", controllerWrapper(contacts.deleteContact));

router.put(
  "/:contactId",
  authenticate,
  validation(joiContactSchema),
  controllerWrapper(contacts.updContact)
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  controllerWrapper(contacts.patchContact)
);

module.exports = router;
