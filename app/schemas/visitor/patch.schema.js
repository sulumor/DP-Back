import Joi from "joi";
import { zipCodeRegex, frAlphaNum, passwordRegex } from "../regex.schema.js";

export default Joi.object({
  email: Joi.string().email({ minDomainSegments: 1 }),
  password: Joi.string().pattern(passwordRegex),
  name: Joi.string().pattern(frAlphaNum).min(3),
  address: Joi.string().pattern(frAlphaNum),
  zip_code: Joi.string().pattern(zipCodeRegex),
  city: Joi.string().pattern(frAlphaNum).min(1).max(45),
}).min(1).required();
