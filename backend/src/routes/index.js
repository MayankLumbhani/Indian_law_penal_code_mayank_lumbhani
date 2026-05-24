import express from "express";
import lawRoutes from "./law.routes.js";

const router = express.Router();


router.use("/laws",lawRoutes);

export default router;