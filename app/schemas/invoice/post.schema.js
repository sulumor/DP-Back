import Joi from "joi";

export default Joi.object({
  issued_at: Joi.date().max("now").required(),
  paid_at: Joi.date().max("now"),
  visitor_id: Joi.number().positive().integer().required(),
  products: Joi.array()
    .items(
      Joi.object({
        id: Joi.number().integer().positive().required(),
        quantity: Joi.number().integer().positive().required(),
      }).min(1).required(),
    ),
}).required();
