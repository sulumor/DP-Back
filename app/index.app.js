import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import router from "./routers/index.router.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import createDoc from "./helpers/swagger.doc.js";

const app = express();

const corsOptions = {
  origin: process.env.FRONT_URL || "*",
  credentials: true,
};

createDoc(app);

app.use(cors(corsOptions));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(errorMiddleware);

export default app;
