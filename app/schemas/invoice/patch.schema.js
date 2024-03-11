import Joi from "joi";

export default Joi.object({
  issued_at: Joi.date().max("now"),
  paid_at: Joi.date().max("now"),
  visitor_id: Joi.number().positive().integer(),
}).min(1).required();
