import VisitorDatamapper from "../datamapper/visitor.datamapper.js";
import CoreController from "./core.controller.js";

export default class VisitorController extends CoreController {
  static datamapper = VisitorDatamapper;
}
