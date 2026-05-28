import { Router } from "express";
import { fetchAllLaws, fetchLawById, addLaw, replaceLawById, updateLawById } from "../controllers/law.controller.js";
// Routes will be added here
const router = Router();

router.get("/", fetchAllLaws);
router.get("/:id", fetchLawById);
router.post("/", addLaw);
router.put("/:id", replaceLawById);
router.patch("/:id", updateLawById);


export default router;