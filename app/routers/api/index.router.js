import { Router } from "express";
import visitorRouter from "./visitors/index.router.js";
import productRouter from "./products/index.router.js";
import invoiceRouter from "./invoices/index.router.js";
import invoiceLineRouter from "./invoice_lines/index.router.js";
import authenticateToken from "../../middlewares/authorization.middleware.js";

const apiRouter = Router();

apiRouter.use(authenticateToken);
apiRouter.use("/visitors", visitorRouter);
apiRouter.use("/products", productRouter);
apiRouter.use("/invoices", invoiceRouter);
apiRouter.use("/invoice_lines", invoiceLineRouter);

export default apiRouter;
