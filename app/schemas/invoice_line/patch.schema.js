import Joi from "joi";

export default Joi.object({
  quantity: Joi.number().positive().integer(),
  invoice_id: Joi.number().positive().integer(),
  product_id: Joi.number().positive().integer(),
}).min(1).required();
