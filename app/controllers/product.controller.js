import CoreController from "./core.controller.js";
import ProductDatamapper from "../datamapper/product.datamapper.js";

export default class ProductController extends CoreController {
  static datamapper = ProductDatamapper;
}
