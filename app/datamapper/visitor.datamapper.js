import CoreDatamapper from "./core.datamapper.js";

export default class VisitorDatamapper extends CoreDatamapper {
  static tableName = "visitor";

  static insertTable = "insert_ visitor";

  static updateTable = "update_visitor";
}
