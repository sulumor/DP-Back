import Joi from "joi";
import { zipCodeRegex, frAlphaNum, passwordRegex } from "../regex.schema.js";

export default Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 1 }),
  password: Joi.string()
    .pattern(passwordRegex)
    .message("Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 digit and 1 special character"),
  name: Joi.string()
    .pattern(frAlphaNum)
    .min(3)
    .messages({
      "string.pattern.base": "Name must contain only letters",
      "string.min": "Name must be at least 3 characters",
    }),
  address: Joi.string()
    .pattern(frAlphaNum)
    .message("Address must contain only letters"),
  zip_code: Joi.string()
    .pattern(zipCodeRegex)
    .message("Zip_code must be a French valid zip code"),
  city: Joi.string()
    .pattern(frAlphaNum)
    .min(1)
    .max(45)
    .messages({
      "string.pattern.base": "City must contain only letters",
      "string.min": "City must have at least 1 character",
      "string.max": "City must have a maximum of 45 characters",
    }),
}).min(1).required();
