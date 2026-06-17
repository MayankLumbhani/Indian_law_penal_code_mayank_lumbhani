import Law from "../models/law.model.js";

export const getTotalCountService = async () => {
    const total = await Law.countDocuments({ isDeleted: false });
    return { total };
};

export const getActiveCountService = async () => {
    const total = await Law.countDocuments({ isDeleted: false });
    return { total };
};

export const getCountByActService = async () => {
    const data = await Law.aggregate([
        { $match: { isDeleted: false } },
        { $group: { _id: "$act", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
    ]);
    return { data };
};

export const getRecentStatsService = async () => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const total = await Law.countDocuments({ isDeleted: false, createdAt: { $gte: sevenDaysAgo } });
    return { addedInLast7Days: total };
};

export const getBookmarkStatsService = async () => {
    const data = await Law.aggregate([
        { $match: { isDeleted: false } },
        { $group: { _id: null, totalBookmarks: { $sum: "$bookmarkCount" }, avgBookmarks: { $avg: "$bookmarkCount" } } },
        { $project: { _id: 0, totalBookmarks: 1, avgBookmarks: { $round: ["$avgBookmarks", 2] } } },
    ]);
    return data[0] || { totalBookmarks: 0, avgBookmarks: 0 };
};
