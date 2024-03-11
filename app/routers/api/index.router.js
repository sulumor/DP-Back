import { Router } from "express";
import ApiError from "../../errors/api.error.js";
import visitorRouter from "./visitor/index.router.js";
import productRouter from "./product/index.router.js";
import invoiceRouter from "./invoice/index.router.js";
import invoiceLineRouter from "./invoice_line/index.router.js";

const apiRouter = Router();

apiRouter.use("/visitor", visitorRouter);
apiRouter.use("/product", productRouter);
apiRouter.use("/invoice", invoiceRouter);
apiRouter.use("/invoice_line", invoiceLineRouter);

apiRouter.use((_, __, next) => next(new ApiError("Ressource not found", { httpStatus: 404 })));

export default apiRouter;
