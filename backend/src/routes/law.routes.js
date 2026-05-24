import { Router } from "express";
import { fetchAllLaws, fetchLawById } from "../controllers/law.controller.js";
// Routes will be added here
const router = Router();

router.get("/",fetchAllLaws);
router.get("/:id",fetchLawById);

export default router;