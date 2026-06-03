import express from "express";
import lawRoutes from "./law.routes.js";
import searchRoutes from "./search.routes.js";
import filterRoutes from "./filter.routes.js";

const router = express.Router();

router.use("/laws", lawRoutes);
router.use("/search", searchRoutes);
router.use("/laws/filter", filterRoutes);

export default router;