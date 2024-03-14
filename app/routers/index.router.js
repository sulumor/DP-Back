import { Router } from "express";
import apiRouter from "./api/index.router.js";
import authRouter from "./auth/index.router.js";

const router = Router();

router.use("/api", apiRouter);
router.use("/", authRouter);

export default router;
