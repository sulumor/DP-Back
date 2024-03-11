import Joi from "joi";

export default Joi.object({
  label: Joi.string().required(),
  price: Joi.number().positive().required(),
  taxes: Joi.number().positive().precision(2).required(),
}).required();
