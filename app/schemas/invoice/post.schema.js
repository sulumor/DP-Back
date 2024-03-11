import Joi from "joi";

export default Joi.object({
  issued_at: Joi.date().max("now").required(),
  paid_at: Joi.date().max("now"),
  visitor_id: Joi.number().positive().integer().required(),
}).required();
