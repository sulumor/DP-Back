import { Router } from "express";
import controllerWrapper from "../../../helpers/controller.wrapper.js";
import ApiError from "../../../errors/api.error.js";
import VisitorController from "../../../controllers/visitor.controller.js";
import validateMiddleware from "../../../middlewares/validation.middleware.js";
import patchSchema from "../../../schemas/visitor/patch.schema.js";
import postSchema from "../../../schemas/visitor/post.schema.js";

const visitorRouter = Router();

visitorRouter.route("/:id(\\d+)")
/**
 * GET /api/visitor/:id
 * @summary Get a visitor from its id
 * @tags Visitor
 * @param { number } id.path.required - Visitor's id
 * @return { Visitor } 200 - Success response - application/json
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 404 - Not found response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
*/
  .get(
    controllerWrapper(VisitorController.getByPk.bind(VisitorController)),
  )

  /**
   * PATCH /api/visitor/:id
 * @summary Update a visitor
 * @tags Visitor
 * @param { number } id.path.required - Visitor's id
 * @param { VisitorUpdate} request.body.required - Visitor's info
 * @return { Visitor } 200 - Success response - application/json
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 404 - Not found response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
  */
  .patch(
    validateMiddleware("body", patchSchema),
    controllerWrapper(VisitorController.update.bind(VisitorController)),
  )

/**
 * DELETE /api/visitor/:id
 * @summary Delete a visitor
 * @tags Visitor
 * @param { number } id.path.required - Visitor's id
 * @return {} 204 - Success response
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 404 - Not found response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
 */
  .delete(
    controllerWrapper(VisitorController.delete.bind(VisitorController)),
  );

visitorRouter.route("/")
/**
 * GET /api/visitor
 * @summary Get all visitors
 * @tags Visitor
 * @return  { Visitor[] } 200 - Success response - application/json
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
 */
  .get(
    controllerWrapper(VisitorController.getAll.bind(VisitorController)),
  )

  /**
   * POST /api/visitor
   * @summary Add a visitor
   * @tags Visitor
   * @param { VisitorCreate } request.body.required - Visitor's info
   * @return { Visitor } 200 - Success response - application/json
   * @return { ApiJsonError } 400 - Bad request response - application/json
   * @return { ApiJsonError } 500 - Internal Server Error - application/json
   */
  .post(
    validateMiddleware("body", postSchema),
    controllerWrapper(VisitorController.create.bind(VisitorController)),
  );

visitorRouter.use((_, __, next) => next(new ApiError("Ressource not found", { httpStatus: 404 })));

export default visitorRouter;
