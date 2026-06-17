import {
    sortBySectionAsc,
    sortBySectionDesc,
    sortByTitle,
    sortByCreatedAt,
    sortByLatest,
    sortByUpdatedAt,
    sortByViews,
    sortByMostViewed,
    sortByBookmarks,
    sortByImportance,
} from "../services/sort.service.js";

export const sortBySectionAscController = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await sortBySectionAsc(page, limit);
        res.status(200).json({ success: true, message: "Laws sorted by section ascending", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const sortBySectionDescController = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await sortBySectionDesc(page, limit);
        res.status(200).json({ success: true, message: "Laws sorted by section descending", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const sortByTitleController = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await sortByTitle(page, limit);
        res.status(200).json({ success: true, message: "Laws sorted by title", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const sortByCreatedAtController = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await sortByCreatedAt(page, limit);
        res.status(200).json({ success: true, message: "Laws sorted by created date", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const sortByLatestController = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await sortByLatest(page, limit);
        res.status(200).json({ success: true, message: "Laws sorted by latest", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const sortByUpdatedAtController = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await sortByUpdatedAt(page, limit);
        res.status(200).json({ success: true, message: "Laws sorted by updated date", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const sortByViewsController = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await sortByViews(page, limit);
        res.status(200).json({ success: true, message: "Laws sorted by views", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const sortByMostViewedController = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await sortByMostViewed(page, limit);
        res.status(200).json({ success: true, message: "Laws sorted by most viewed", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const sortByBookmarksController = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await sortByBookmarks(page, limit);
        res.status(200).json({ success: true, message: "Laws sorted by bookmarks", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const sortByImportanceController = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await sortByImportance(page, limit);
        res.status(200).json({ success: true, message: "Laws sorted by importance", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};
