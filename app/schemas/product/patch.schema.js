import Joi from "joi";

export default Joi.object({
  label: Joi.string(),
  price: Joi.number().positive(),
  taxes: Joi.number().positive().precision(2),
}).min(1).required();
