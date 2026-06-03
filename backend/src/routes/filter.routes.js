import { Router } from "express";
import {
  fetchLawsByAct,
  fetchLawsByChapter,
  fetchLawsBySection,
  fetchRecentLaws,
  fetchTrendingLaws,
} from "../controllers/filter.controller.js";

const router = Router();

// GET /api/v1/laws/filter/act/:actName
router.get("/act/:actName", fetchLawsByAct);

// GET /api/v1/laws/filter/chapter/:chapterId
router.get("/chapter/:chapterId", fetchLawsByChapter);

// GET /api/v1/laws/filter/section/:sectionNumber
router.get("/section/:sectionNumber", fetchLawsBySection);

// GET /api/v1/laws/filter/recent
router.get("/recent", fetchRecentLaws);

// GET /api/v1/laws/filter/trending
router.get("/trending", fetchTrendingLaws);

export default router;