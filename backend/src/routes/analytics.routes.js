import express from "express";
import {
    getMostViewed,
    getMostBookmarked,
    getLawsByActAnalytics,
    getRecentUpdates,
    getPopularity,
} from "../controllers/analytics.controller.js";

const router = express.Router();

router.get("/laws/most-viewed", getMostViewed);
router.get("/laws/most-bookmarked", getMostBookmarked);
router.get("/laws/by-category", getLawsByActAnalytics);
router.get("/laws/recent-updates", getRecentUpdates);
router.get("/laws/popularity", getPopularity);

export default router;
