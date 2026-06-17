import { Router } from "express";
import { validateCreateLaw, validateUpdateLaw } from "../middlewares/validate.middleware.js";
import { globalLimiter } from "../middlewares/rateLimit.middleware.js";
import {
  fetchAllLaws,
  fetchLawById,
  addLaw,
  replaceLawById,
  updateLawById,
  deleteLawById,
  lawExists,
  fetchRecentLaws,
  fetchArchivedLaws,
  archiveLawById,
  restoreLawById,
  getLawHistoryById,
  getLawSummaryById,
  fetchRandomLaw,
  fetchTrendingLaws,
} from "../controllers/law.controller.js";

const router = Router();

// GET /api/v1/laws
router.get("/", globalLimiter, fetchAllLaws);

// GET /api/v1/laws/exists/:id
router.get("/exists/:id", lawExists);

// GET /api/v1/laws/recent
router.get("/recent", fetchRecentLaws);

// GET /api/v1/laws/archived
router.get("/archived", fetchArchivedLaws);

// GET /api/v1/laws/random
router.get("/random", fetchRandomLaw);

// GET /api/v1/laws/trending
router.get("/trending", fetchTrendingLaws);

// GET /api/v1/laws/:id
router.get("/:id", fetchLawById);

// GET /api/v1/laws/:id/history
router.get("/:id/history", getLawHistoryById);

// GET /api/v1/laws/:id/summary
router.get("/:id/summary", getLawSummaryById);

// POST /api/v1/laws
router.post("/", validateCreateLaw, addLaw);

// PUT /api/v1/laws/:id
router.put("/:id", validateUpdateLaw, replaceLawById);

// PATCH /api/v1/laws/:id
router.patch("/:id", updateLawById);

// PATCH /api/v1/laws/:id/archive
router.patch("/:id/archive", archiveLawById);

// PATCH /api/v1/laws/:id/restore
router.patch("/:id/restore", restoreLawById);

// DELETE /api/v1/laws/:id
router.delete("/:id", deleteLawById);

export default router;