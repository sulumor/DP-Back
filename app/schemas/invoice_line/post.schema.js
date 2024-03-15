import Joi from "joi";

export default Joi.object({
  quantity: Joi.number()
    .positive()
    .integer()
    .required()
    .messages({
      "number.positive": "Quantity must be a positive number",
      "number.integer": "Quantity must be a valid integer",
    }),
  invoice_id: Joi.number()
    .positive()
    .integer()
    .required()
    .messages({
      "number.positive": "Invoice_id must be a positive number",
      "number.integer": "Invoice_id must be a valid integer",
    }),
  product_id: Joi.number()
    .positive()
    .integer()
    .required()
    .messages({
      "number.positive": "Product_id must be a positive number",
      "number.integer": "Product_id must be a valid integer",
    }),
}).required();
