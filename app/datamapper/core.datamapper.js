import client from "../helpers/pg.client.js";

export default class CoreDatamapper {
  static tableName;

  static insertTable;

  static updateTable;

  static async findAll() {
    const result = await client.query(`SELECT * FROM "${this.tableName}"`);
    return result.rows;
  }

  static async findByPk(id) {
    const result = await client.query(`SELECT * FROM "${this.tableName}" WHERE id=$1`, [id]);
    return result.rows[0];
  }

  static async insert(data) {
    const result = await client.query(`SELECT * FROM ${this.insertTable}($1)`, [data]);
    return result.rows[0];
  }

  static async update(data) {
    const result = await client.query(`SELECT * FROM ${this.updateTable}($1)`, [data]);
    return result.rows[0];
  }

  static async delete(id) {
    const result = await client.query(`DELETE FROM "${this.tableName}" WHERE "id" = $1`, [id]);
    return !!result.rowCount;
  }
}
