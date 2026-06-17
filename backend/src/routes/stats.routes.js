import express from "express";
import {
    getTotalCount,
    getActiveCount,
    getCountByAct,
    getRecentStats,
    getBookmarkStats,
} from "../controllers/stats.controller.js";

const router = express.Router();

router.get("/laws/count", getTotalCount);
router.get("/laws/active", getActiveCount);
router.get("/laws/by-act", getCountByAct);
router.get("/laws/recent", getRecentStats);
router.get("/laws/bookmarks", getBookmarkStats);

export default router;
