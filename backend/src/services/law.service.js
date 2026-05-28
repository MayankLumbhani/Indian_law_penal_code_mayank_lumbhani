import Law from "../models/law.model.js";
import getPagination from "../utils/pagination.js";
import mongoose from "mongoose";

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

export const getLawwById = async (id) => {

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if(!isValidId){
        return null;
    } 
    const law = await Law.findById(id);
    return law;

}

export const createLaw = async (body) => {

    const law = await Law.create(body);
    return law;

}

export const replaceLaw = async (id, body) => {

    const isValidId = mongoose.Types.ObjectId.isValid(id);

    if(!isValidId) return null;

    const law = await Law.findByIdAndUpdate(id, body,  {
        returnDocument: "after",
        runValidators : true,
        overwrite : true,
    });
    return law;
}

export const updateLaw = async (id, body) => {
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if(!isValidId) return null;

    const law = await Law.findByIdAndUpdate(
        id,
        { $set : body },
        { returnDocument: "after", runValidators : true }
    );
    
    return law;

};