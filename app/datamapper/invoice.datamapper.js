import client from "../helpers/pg.client.js";
import CoreDatamapper from "./core.datamapper.js";

export default class InvoiceDatamapper extends CoreDatamapper {
  static tableName = "invoice";

  static insertTable = "add_invoice";

  static updateTable = "update_invoice";

  static async invoiceWithDetails({ name }) {
    // eslint-disable-next-line quotes
    const result = await client.query(`SELECT * FROM "invoice_details" WHERE name=$1`, [name]);
    return result.rows;
  }
}
