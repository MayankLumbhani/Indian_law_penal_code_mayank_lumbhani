import express from "express";
import {
    getJwtProfile,
    getDashboard,
    generateToken,
    verifyToken,
    refreshToken,
    revokeToken,
    getPrivateLaws,
    getPrivateAnalytics,
} from "../controllers/jwt.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/profile", protect, getJwtProfile);
router.get("/dashboard", protect, getDashboard);
router.post("/generate-token", generateToken);
router.post("/verify-token", verifyToken);
router.post("/refresh-token", refreshToken);
router.delete("/revoke-token", protect, revokeToken);
router.get("/private-laws", protect, getPrivateLaws);
router.get("/private-analytics", protect, getPrivateAnalytics);

export default router;
