import Joi from "joi";

export default Joi.object({
  issued_at: Joi.date()
    .max("now")
    .message("Issued_at must be under now")
    .required(),
  paid_at: Joi.date()
    .max("now")
    .message("Paid_at must be under now"),
  visitor_id: Joi.number()
    .positive()
    .integer()
    .required()
    .messages({
      "number.positive": "Visitor_id must be a positive number",
      "number.integer": "Visitor_id must be a valid integer",
    }),
  products: Joi.array()
    .items(
      Joi.object({
        id: Joi.number()
          .integer()
          .positive()
          .required()
          .messages({
            "number.positive": "Id must be a positive number",
            "number.integer": "Id must be a valid integer",
          }),
        quantity: Joi.number()
          .integer()
          .positive()
          .required()
          .messages({
            "number.positive": "Quantity must be a positive number",
            "number.integer": "Quantity must be a valid integer",
          }),
      }).min(1).required(),
    ),
}).required();
