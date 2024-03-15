import Joi from "joi";
import { zipCodeRegex, frAlphaNum, passwordRegex } from "../regex.schema.js";

export default Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 1 })
    .messages({
      "string.empty": "Email is required",
    })
    .required(),
  password: Joi.string()
    .regex(passwordRegex)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base": "Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 digit and 1 special character",
    }),
  name: Joi.string()
    .regex(frAlphaNum)
    .min(3)
    .required()
    .messages({
      "string.empty": "Name is required",
      "string.pattern.base": "Name must contain only letters",
      "string.min": "Name must be at least 3 characters",
    }),
  address: Joi.string()
    .messages({
      "string.empty": "Address is required",
    })
    .required(),
  zip_code: Joi.string()
    .regex(zipCodeRegex)
    .required()
    .messages({
      "string.empty": "Zip_code is required",
      "string.pattern.base": "Zip_code must be a French valid zip code",
    }),
  city: Joi.string()
    .regex(frAlphaNum)
    .min(1)
    .max(45)
    .required()
    .messages({
      "string.empty": "City is required",
      "string.pattern.base": "City must contain only letters",
      "string.min": "City must have at least 1 character",
      "string.max": "City must have a maximum of 45 characters",
    }),
}).required();
