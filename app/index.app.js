import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import router from "./routers/index.router.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import corsOptions from "./helpers/cors.options.js";
import createDoc from "./helpers/swagger.doc.js";
import Limiter from "./helpers/rateLimiter.config.js";

const app = express();

createDoc(app);

app.use(cors(corsOptions));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(Limiter.base);
app.use(router);
app.use(errorMiddleware);

export default app;
