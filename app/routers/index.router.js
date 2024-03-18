import { Router } from "express";
import apiRouter from "./api/index.router.js";
import authRouter from "./auth/index.router.js";
import ApiError from "../errors/api.error.js";

const router = Router();

router.use("/api", apiRouter);
router.use("/", authRouter);

router.get("/", (_, res) => {
  res.redirect("/api-docs");
});

apiRouter.use((_, __, next) => next(new ApiError("Ressource not found", { httpStatus: 404 })));

export default router;
