import express from "express";
import lawRoutes from "./law.routes.js";
import searchRoutes from "./search.routes.js";
import filterRoutes from "./filter.routes.js";
import sortRoutes from "./sort.routes.js";
import analyticsRoutes from "./analytics.routes.js";
import statsRoutes from "./stats.routes.js";

const router = express.Router();

router.use("/laws", lawRoutes);
router.use("/search", searchRoutes);
router.use("/laws/filter", filterRoutes);
router.use("/laws/sort", sortRoutes);
router.use("/analytics", analyticsRoutes);
router.use("/stats", statsRoutes);

export default router;