import Law from "../models/law.model.js";
import getPagination from "../utils/pagination.js";

export const getMostViewedService = async (page, limit) => {
    const { pageNum, limitNum, skip } = getPagination(page, limit);
    const query = { isDeleted: false };
    const laws = await Law.find(query)
        .sort({ views: -1 })
        .skip(skip)
        .limit(limitNum)
        .select("act section section_title views");
    const total = await Law.countDocuments(query);
    return { laws, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
};

export const getMostBookmarkedService = async (page, limit) => {
    const { pageNum, limitNum, skip } = getPagination(page, limit);
    const query = { isDeleted: false };
    const laws = await Law.find(query)
        .sort({ bookmarkCount: -1 })
        .skip(skip)
        .limit(limitNum)
        .select("act section section_title bookmarkCount");
    const total = await Law.countDocuments(query);
    return { laws, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
};

export const getLawsByActAnalyticsService = async (page, limit) => {
    const { pageNum, limitNum, skip } = getPagination(page, limit);
    const laws = await Law.aggregate([
        { $match: { isDeleted: false } },
        { $group: { _id: "$act", totalSections: { $sum: 1 }, totalViews: { $sum: "$views" }, totalBookmarks: { $sum: "$bookmarkCount" } } },
        { $sort: { totalSections: -1 } },
        { $skip: skip },
        { $limit: limitNum },
    ]);
    const totalDocs = await Law.aggregate([
        { $match: { isDeleted: false } },
        { $group: { _id: "$act" } },
        { $count: "total" },
    ]);
    const total = totalDocs[0]?.total || 0;
    return { laws, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
};

export const getRecentUpdatesService = async (page, limit) => {
    const { pageNum, limitNum, skip } = getPagination(page, limit);
    const query = { isDeleted: false };
    const laws = await Law.find(query)
        .sort({ updatedAt: -1 })
        .skip(skip)
        .limit(limitNum)
        .select("act section section_title updatedAt");
    const total = await Law.countDocuments(query);
    return { laws, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
};

export const getPopularityService = async (page, limit) => {
    const { pageNum, limitNum, skip } = getPagination(page, limit);
    const query = { isDeleted: false };
    const laws = await Law.find(query)
        .sort({ views: -1, bookmarkCount: -1 })
        .skip(skip)
        .limit(limitNum)
        .select("act section section_title views bookmarkCount");
    const total = await Law.countDocuments(query);
    return { laws, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
};
