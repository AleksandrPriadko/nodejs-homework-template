const express = require("express");
const router = express.Router();

const { auth } = require("../../controllers");
const { joiUserSchema } = require("../../validations");
const {
  validation,
  controllerWrapper,
  authenticate,
  upload,
} = require("../../middlewares");

router.post(
  "/signup",
  validation(joiUserSchema),
  controllerWrapper(auth.registrationUser)
);

router.post("/login", validation(joiUserSchema), controllerWrapper(auth.login));

router.post(
  "/verify",
  validation(joiUserSchema),
  controllerWrapper(auth.resendEmail)
);

router.post("/logout", authenticate, controllerWrapper(auth.logout));

router.patch("/", authenticate, controllerWrapper(auth.subscription));

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllerWrapper(auth.avatar)
);

router.get("/current", authenticate, controllerWrapper(auth.current));

router.get("/verify/:verificationToken", controllerWrapper(auth.verify));

module.exports = router;
