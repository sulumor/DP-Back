import CoreController from "./core.controller.js";
import InvoiceDatamapper from "../datamapper/invoice.datamapper.js";

export default class InvoiceController extends CoreController {
  static datamapper = InvoiceDatamapper;

  static async getInvoiceDetails({ user }, res, next) {
    const invoices = await this.datamapper.invoiceWithDetails(user);
    if (!invoices) return next();
    return res.status(200).json(invoices);
  }
}
