import { Router } from "express";
import controllerWrapper from "../../../helpers/controller.wrapper.js";
import ApiError from "../../../errors/api.error.js";
import InvoiceController from "../../../controllers/invoice.controller.js";
import validateMiddleware from "../../../middlewares/validation.middleware.js";
import patchSchema from "../../../schemas/invoice/patch.schema.js";
import postSchema from "../../../schemas/invoice/post.schema.js";

const invoiceRouter = Router();

invoiceRouter.route("/:id(\\d+)")
/**
 * GET /api/invoices/:id
 * @summary Get a invoice from its id
 * @tags Invoice
 * @param { number } id.path.required - Invoice's id
 * @return { Invoice } 200 - Success response - application/json
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 404 - Not found response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
*/
  .get(
    controllerWrapper(InvoiceController.getByPk.bind(InvoiceController)),
  )

  /**
   * PATCH /api/invoices/:id
 * @summary Update a invoice
 * @tags Invoice
 * @param { number } id.path.required - Invoice's id
 * @param { InvoiceUpdate} request.body.required - Invoice's info
 * @return { Invoice } 200 - Success response - application/json
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 404 - Not found response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
  */
  .patch(
    validateMiddleware("body", patchSchema),
    controllerWrapper(InvoiceController.update.bind(InvoiceController)),
  )

/**
 * DELETE /api/invoices/:id
 * @summary Delete a invoice
 * @tags Invoice
 * @param { number } id.path.required - Invoice's id
 * @return {} 204 - Success response
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 404 - Not found response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
 */
  .delete(
    controllerWrapper(InvoiceController.delete.bind(InvoiceController)),
  );

invoiceRouter.route("/")
/**
 * GET /api/invoices
 * @summary Get all invoices
 * @tags Invoice
 * @return  { Invoice[] } 200 - Success response - application/json
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
 */
  .get(
    controllerWrapper(InvoiceController.getAll.bind(InvoiceController)),
  )

  /**
   * POST /api/invoices
   * @summary Add a invoice
   * @tags Invoice
   * @param { InvoiceCreate } request.body.required - Invoice's info
   * @return { Invoice } 200 - Success response - application/json
   * @return { ApiJsonError } 400 - Bad request response - application/json
   * @return { ApiJsonError } 500 - Internal Server Error - application/json
   */
  .post(
    validateMiddleware("body", postSchema),
    controllerWrapper(InvoiceController.create.bind(InvoiceController)),
  );

invoiceRouter.use((_, __, next) => next(new ApiError("Ressource not found", { httpStatus: 404 })));

export default invoiceRouter;
