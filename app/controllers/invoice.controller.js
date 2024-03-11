import CoreController from "./core.controller.js";
import InvoiceDatamapper from "../datamapper/invoice.datamapper.js";

export default class InvoiceController extends CoreController {
  static datamapper = InvoiceDatamapper;
}
