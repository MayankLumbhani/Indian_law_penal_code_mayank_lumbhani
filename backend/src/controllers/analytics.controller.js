import {
    getMostViewedService,
    getMostBookmarkedService,
    getLawsByActAnalyticsService,
    getRecentUpdatesService,
    getPopularityService,
} from "../services/analytics.service.js";

export const getMostViewed = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await getMostViewedService(page, limit);
        res.status(200).json({ success: true, message: "Most viewed laws fetched successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getMostBookmarked = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await getMostBookmarkedService(page, limit);
        res.status(200).json({ success: true, message: "Most bookmarked laws fetched successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getLawsByActAnalytics = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await getLawsByActAnalyticsService(page, limit);
        res.status(200).json({ success: true, message: "Laws by act analytics fetched successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getRecentUpdates = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await getRecentUpdatesService(page, limit);
        res.status(200).json({ success: true, message: "Recent updates fetched successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getPopularity = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await getPopularityService(page, limit);
        res.status(200).json({ success: true, message: "Popularity metrics fetched successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};
