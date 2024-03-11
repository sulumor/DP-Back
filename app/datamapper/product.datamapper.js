import CoreDatamapper from "./core.datamapper.js";

export default class ProductDatamapper extends CoreDatamapper {
  static tableName = "product";

  static insertTable = "insert_product";

  static updateTable = "update_product";
}
