import Law from "../models/law.model.js";
import getPagination from "../utils/pagination.js";

export const sortBySectionAsc = async (page, limit) => {
    const { pageNum, limitNum, skip } = getPagination(page, limit);
    const query = { isDeleted: false };
    const laws = await Law.find(query).sort({ section: 1 }).skip(skip).limit(limitNum);
    const total = await Law.countDocuments(query);
    return { laws, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
};

export const sortBySectionDesc = async (page, limit) => {
    const { pageNum, limitNum, skip } = getPagination(page, limit);
    const query = { isDeleted: false };
    const laws = await Law.find(query).sort({ section: -1 }).skip(skip).limit(limitNum);
    const total = await Law.countDocuments(query);
    return { laws, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
};

export const sortByTitle = async (page, limit) => {
    const { pageNum, limitNum, skip } = getPagination(page, limit);
    const query = { isDeleted: false };
    const laws = await Law.find(query).sort({ section_title: 1 }).skip(skip).limit(limitNum);
    const total = await Law.countDocuments(query);
    return { laws, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
};

export const sortByCreatedAt = async (page, limit) => {
    const { pageNum, limitNum, skip } = getPagination(page, limit);
    const query = { isDeleted: false };
    const laws = await Law.find(query).sort({ createdAt: 1 }).skip(skip).limit(limitNum);
    const total = await Law.countDocuments(query);
    return { laws, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
};

export const sortByLatest = async (page, limit) => {
    const { pageNum, limitNum, skip } = getPagination(page, limit);
    const query = { isDeleted: false };
    const laws = await Law.find(query).sort({ createdAt: -1 }).skip(skip).limit(limitNum);
    const total = await Law.countDocuments(query);
    return { laws, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
};

export const sortByUpdatedAt = async (page, limit) => {
    const { pageNum, limitNum, skip } = getPagination(page, limit);
    const query = { isDeleted: false };
    const laws = await Law.find(query).sort({ updatedAt: 1 }).skip(skip).limit(limitNum);
    const total = await Law.countDocuments(query);
    return { laws, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
};

export const sortByViews = async (page, limit) => {
    const { pageNum, limitNum, skip } = getPagination(page, limit);
    const query = { isDeleted: false };
    const laws = await Law.find(query).sort({ views: 1 }).skip(skip).limit(limitNum);
    const total = await Law.countDocuments(query);
    return { laws, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
};

export const sortByMostViewed = async (page, limit) => {
    const { pageNum, limitNum, skip } = getPagination(page, limit);
    const query = { isDeleted: false };
    const laws = await Law.find(query).sort({ views: -1 }).skip(skip).limit(limitNum);
    const total = await Law.countDocuments(query);
    return { laws, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
};

export const sortByBookmarks = async (page, limit) => {
    const { pageNum, limitNum, skip } = getPagination(page, limit);
    const query = { isDeleted: false };
    const laws = await Law.find(query).sort({ bookmarkCount: -1 }).skip(skip).limit(limitNum);
    const total = await Law.countDocuments(query);
    return { laws, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
};

export const sortByImportance = async (page, limit) => {
    const { pageNum, limitNum, skip } = getPagination(page, limit);
    const query = { isDeleted: false };
    const laws = await Law.find(query).sort({ views: -1 }).skip(skip).limit(limitNum);
    const total = await Law.countDocuments(query);
    return { laws, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
};
