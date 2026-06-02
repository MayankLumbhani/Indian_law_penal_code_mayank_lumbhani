import express from "express";
import lawRoutes from "./law.routes.js";
import searchRoutes from "./search.routes.js";

const router = express.Router();

router.use("/laws", lawRoutes);
router.use("/search", searchRoutes);

export default router;