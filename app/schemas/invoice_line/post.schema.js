import Joi from "joi";

export default Joi.object({
  quantity: Joi.number().positive().integer().required(),
  invoice_id: Joi.number().positive().integer().required(),
  product_id: Joi.number().positive().integer().required(),
}).required();
