import { Router } from "express";
import { fetchAllLaws } from "../controllers/law.controller.js";
// Routes will be added here
const router = Router();

router.get("/",fetchAllLaws);

export default router;