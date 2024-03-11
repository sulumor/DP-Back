import Joi from "joi";
import { zipCodeRegex, frAlphaNum, passwordRegex } from "../regex.schema.js";

export default Joi.object({
  email: Joi.string().email({ minDomainSegments: 1 }).required(),
  password: Joi.string().pattern(passwordRegex).required(),
  name: Joi.string().pattern(frAlphaNum).min(3).required(),
  address: Joi.string().required(),
  zip_code: Joi.string().pattern(zipCodeRegex).required(),
  city: Joi.string().pattern(frAlphaNum).min(1).max(45)
    .required(),
}).required();
