import express from "express";
import {
    loggerMiddlewarePractice,
    authMiddlewarePractice,
    cacheMiddlewarePractice,
    rateLimitMiddlewarePractice,
    errorHandlerMiddlewarePractice,
    requestTimeMiddlewarePractice,
    securityMiddlewarePractice,
    corsMiddlewarePractice,
    compressionMiddlewarePractice,
    validationMiddlewarePractice,
} from "../controllers/middleware.controller.js";

const router = express.Router();

router.get("/logger", loggerMiddlewarePractice);
router.get("/auth", authMiddlewarePractice);
router.get("/cache", cacheMiddlewarePractice);
router.get("/rate-limit", rateLimitMiddlewarePractice);
router.get("/error-handler", errorHandlerMiddlewarePractice);
router.get("/request-time", requestTimeMiddlewarePractice);
router.get("/security", securityMiddlewarePractice);
router.get("/cors", corsMiddlewarePractice);
router.get("/compression", compressionMiddlewarePractice);
router.get("/validation", validationMiddlewarePractice);

export default router;
