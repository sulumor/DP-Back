import Joi from "joi";

export default Joi.object({
  label: Joi.string()
    .messages({ "string.empty": "Label is required" })
    .required(),
  price: Joi.number()
    .positive()
    .required()
    .messages({
      "number.base": "Price must be a number",
      "number.positive": "Price must be a positive number",
    }),
  taxes: Joi.number()
    .positive()
    .precision(2)
    .required()
    .messages({
      "number.base": "Taxes must be a number",
      "number.positive": "Taxes must be a positive number",
      "number.precision": "Taxes must have a precision of 2",
    }),
}).required();
