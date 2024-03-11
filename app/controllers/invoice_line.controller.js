import InvoiceLineDatamapper from "../datamapper/invoice_line.datamapper.js";
import CoreController from "./core.controller.js";

export default class InvoiceLineController extends CoreController {
  static datamapper = InvoiceLineDatamapper;
}
