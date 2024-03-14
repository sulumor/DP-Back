import { Router } from "express";
import controllerWrapper from "../../../helpers/controller.wrapper.js";
import ApiError from "../../../errors/api.error.js";
import InvoiceLineController from "../../../controllers/invoice_line.controller.js";
import validateMiddleware from "../../../middlewares/validation.middleware.js";
import patchSchema from "../../../schemas/invoice_line/patch.schema.js";
import postSchema from "../../../schemas/invoice_line/post.schema.js";

const invoiceLineRouter = Router();

invoiceLineRouter.route("/:id(\\d+)")
/**
 * GET /api/invoice_lines/:id
 * @summary Get a invoice_line from its id
 * @tags InvoiceLine
 * @param { number } id.path.required - InvoiceLine's id
 * @return { InvoiceLine } 200 - Success response - application/json
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 404 - Not found response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
*/
  .get(
    controllerWrapper(InvoiceLineController.getByPk.bind(InvoiceLineController)),
  )

  /**
   * PATCH /api/invoice_lines/:id
 * @summary Update a invoice_line
 * @tags InvoiceLine
 * @param { number } id.path.required - InvoiceLine's id
 * @param { InvoiceLineUpdate} request.body.required - InvoiceLine's info
 * @return { InvoiceLine } 200 - Success response - application/json
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 404 - Not found response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
  */
  .patch(
    validateMiddleware("body", patchSchema),
    controllerWrapper(InvoiceLineController.update.bind(InvoiceLineController)),
  )

/**
 * DELETE /api/invoice_lines/:id
 * @summary Delete a invoice_line
 * @tags InvoiceLine
 * @param { number } id.path.required - InvoiceLine's id
 * @return { object } 204 - Success response
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 404 - Not found response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
 */
  .delete(
    controllerWrapper(InvoiceLineController.delete.bind(InvoiceLineController)),
  );

invoiceLineRouter.route("/")
/**
 * GET /api/invoice_lines
 * @summary Get all invoice_lines
 * @tags InvoiceLine
 * @return  { InvoiceLine[] } 200 - Success response - application/json
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
 */
  .get(
    controllerWrapper(InvoiceLineController.getAll.bind(InvoiceLineController)),
  )

  /**
   * POST /api/invoice_lines
   * @summary Add a invoice_line
   * @tags InvoiceLine
   * @param { InvoiceLineCreate } request.body.required - InvoiceLine's info
   * @return { InvoiceLine } 200 - Success response - application/json
   * @return { ApiJsonError } 400 - Bad request response - application/json
   * @return { ApiJsonError } 500 - Internal Server Error - application/json
   */
  .post(
    validateMiddleware("body", postSchema),
    controllerWrapper(InvoiceLineController.create.bind(InvoiceLineController)),
  );

invoiceLineRouter.use((_, __, next) => next(new ApiError("Ressource not found", { httpStatus: 404 })));

export default invoiceLineRouter;
