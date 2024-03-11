import CoreDatamapper from "./core.datamapper.js";

export default class InvoiceLineDatamapper extends CoreDatamapper {
  static tableName = "invoice_line";

  static insertTable = "insert_invoice_line";

  static updateTable = "update_invoice_line";
}
