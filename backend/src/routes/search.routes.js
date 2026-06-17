import { Router } from "express";
import { searchLawsByKeyword } from "../controllers/search.controller.js";
import { globalLimiter } from "../middlewares/rateLimit.middleware.js";

const router = Router();

// GET /api/v1/search/laws?q=murder
router.get("/laws", globalLimiter, searchLawsByKeyword);

export default router;