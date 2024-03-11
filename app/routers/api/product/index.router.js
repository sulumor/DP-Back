import { Router } from "express";
import controllerWrapper from "../../../helpers/controller.wrapper.js";
import ApiError from "../../../errors/api.error.js";
import ProductController from "../../../controllers/product.controller.js";
import validateMiddleware from "../../../middlewares/validation.middleware.js";
import patchSchema from "../../../schemas/product/patch.schema.js";
import postSchema from "../../../schemas/product/post.schema.js";

const productRouter = Router();

productRouter.route("/:id(\\d+)")
/**
 * GET /api/product/:id
 * @summary Get a product from its id
 * @tags Product
 * @param { number } id.path.required - product's id
 * @return { Product } 200 - Success response - application/json
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 404 - Not found response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
*/
  .get(
    controllerWrapper(ProductController.getByPk.bind(ProductController)),
  )

  /**
   * PATCH /api/product/:id
 * @summary Update a product
 * @tags Product
 * @param { number } id.path.required - product's id
 * @param { ProductUpdate} request.body.required - product's info
 * @return { Product } 200 - Success response - application/json
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 404 - Not found response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
  */
  .patch(
    validateMiddleware("body", patchSchema),
    controllerWrapper(ProductController.update.bind(ProductController)),
  )

/**
 * DELETE /api/product/:id
 * @summary Delete a product
 * @tags Product
 * @param { number } id.path.required - product's id
 * @return {} 204 - Success response
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 404 - Not found response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
 */
  .delete(
    controllerWrapper(ProductController.delete.bind(ProductController)),
  );

productRouter.route("/")
/**
 * GET /api/product
 * @summary Get all products
 * @tags Product
 * @return  { Product[] } 200 - Success response - application/json
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
 */
  .get(
    controllerWrapper(ProductController.getAll.bind(ProductController)),
  )

  /**
   * POST /api/product
   * @summary Add a product
   * @tags Product
   * @param { ProductCreate } request.body.required - product's info
   * @return { Product } 200 - Success response - application/json
   * @return { ApiJsonError } 400 - Bad request response - application/json
   * @return { ApiJsonError } 500 - Internal Server Error - application/json
   */
  .post(
    validateMiddleware("body", postSchema),
    controllerWrapper(ProductController.create.bind(ProductController)),
  );

productRouter.use((_, __, next) => next(new ApiError("Ressource not found", { httpStatus: 404 })));

export default productRouter;
