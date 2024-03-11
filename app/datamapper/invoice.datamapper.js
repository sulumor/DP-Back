import CoreDatamapper from "./core.datamapper.js";

export default class InvoiceDatamapper extends CoreDatamapper {
  static tableName = "invoice";

  static insertTable = "insert_invoice";

  static updateTable = "update_invoice";
}
