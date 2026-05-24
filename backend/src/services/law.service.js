import Law from "../models/law.model.js";
import getPagination from "../utils/pagination.js";

export const getAllLaws = async (query) => {

    const { page, limit } = query;

    if (page || limit) {
        const { pageNum, limitNum, skip } = getPagination(page, limit);

        const laws = await Law.find().skip(skip).limit(limitNum);

        const total = await Law.countDocuments();

        return {
            total,
            page: pageNum,
            limit: limitNum,
            totalPages: Math.ceil(total / limitNum),
            data: laws,
        };
    }

    const laws = await Law.find();
    return laws;
    
};