import { Router } from "express";
import { searchLawsByKeyword } from "../controllers/search.controller.js";

const router = Router();

// GET /api/v1/search/laws?q=murder
router.get("/laws", searchLawsByKeyword);

export default router;