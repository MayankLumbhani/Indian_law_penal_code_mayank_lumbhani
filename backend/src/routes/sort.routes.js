import express from "express";
import {
    sortBySectionAscController,
    sortBySectionDescController,
    sortByTitleController,
    sortByCreatedAtController,
    sortByLatestController,
    sortByUpdatedAtController,
    sortByViewsController,
    sortByMostViewedController,
    sortByBookmarksController,
    sortByImportanceController,
} from "../controllers/sort.controller.js";

const router = express.Router();

router.get("/section/asc", sortBySectionAscController);
router.get("/section/desc", sortBySectionDescController);
router.get("/title", sortByTitleController);
router.get("/created-at", sortByCreatedAtController);
router.get("/latest", sortByLatestController);
router.get("/updated-at", sortByUpdatedAtController);
router.get("/views", sortByViewsController);
router.get("/most-viewed", sortByMostViewedController);
router.get("/bookmarks", sortByBookmarksController);
router.get("/importance", sortByImportanceController);

export default router;
