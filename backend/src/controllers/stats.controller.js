import {
    getTotalCountService,
    getActiveCountService,
    getCountByActService,
    getRecentStatsService,
    getBookmarkStatsService,
} from "../services/stats.service.js";

export const getTotalCount = async (req, res) => {
    try {
        const data = await getTotalCountService();
        res.status(200).json({ success: true, message: "Total law count fetched successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getActiveCount = async (req, res) => {
    try {
        const data = await getActiveCountService();
        res.status(200).json({ success: true, message: "Active law count fetched successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getCountByAct = async (req, res) => {
    try {
        const data = await getCountByActService();
        res.status(200).json({ success: true, message: "Laws count by act fetched successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getRecentStats = async (req, res) => {
    try {
        const data = await getRecentStatsService();
        res.status(200).json({ success: true, message: "Recent law stats fetched successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getBookmarkStats = async (req, res) => {
    try {
        const data = await getBookmarkStatsService();
        res.status(200).json({ success: true, message: "Bookmark statistics fetched successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};
