import Joi from "joi";

export default Joi.object({
  label: Joi.string(),
  price: Joi.number()
    .positive()
    .message("Price must be a positive number"),
  taxes: Joi.number()
    .positive()
    .precision(2)
    .messages({
      "number.positive": "Taxes must be a positive number",
      "number.precision": "Taxes must have a precision of 2",
    }),
}).min(1).required();
