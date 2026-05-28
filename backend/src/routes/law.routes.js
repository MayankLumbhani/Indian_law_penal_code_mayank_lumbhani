import { Router } from "express";
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
} from "../controllers/law.controller.js";

const router = Router();

// GET /api/v1/laws
router.get("/", fetchAllLaws);

// GET /api/v1/laws/exists/:id
router.get("/exists/:id", lawExists);

// GET /api/v1/laws/recent
router.get("/recent", fetchRecentLaws);

// GET /api/v1/laws/archived
router.get("/archived", fetchArchivedLaws);

// GET /api/v1/laws/:id
router.get("/:id", fetchLawById);

// POST /api/v1/laws
router.post("/", addLaw);

// PUT /api/v1/laws/:id
router.put("/:id", replaceLawById);

// PATCH /api/v1/laws/:id
router.patch("/:id", updateLawById);

// PATCH /api/v1/laws/:id/archive
router.patch("/:id/archive", archiveLawById);

// DELETE /api/v1/laws/:id
router.delete("/:id", deleteLawById);

export default router;