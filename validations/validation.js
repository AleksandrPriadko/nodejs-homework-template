const Joi = require("joi");

const joiContactSchema = Joi.object({
  name: Joi.string().min(3).max(32).required(),
  email: Joi.string()
    .email({ maxDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.number().integer().min(380500000000).max(380999999999).required(),
  favorite: Joi.boolean(),
});
const joiUserSchema = Joi.object({
  email: Joi.string()
    .email({ maxDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

module.exports = { joiContactSchema, joiUserSchema };
