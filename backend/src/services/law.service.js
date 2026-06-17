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

export const deleteLaw = async (id) => {
  const isValidId = mongoose.Types.ObjectId.isValid(id);
  if (!isValidId) return null;

  const law = await Law.findByIdAndUpdate(
    id,
    { $set: { isDeleted: true } },
    { returnDocument: "after" }
  );

  return law;
};

export const checkLawExists = async (id) => {
  const isValidId = mongoose.Types.ObjectId.isValid(id);
  if (!isValidId) return false;

  const law = await Law.findById(id);
  return !!law;
};

export const getRecentLaws = async (query) => {
  const { page, limit } = query;
  const { pageNum, limitNum, skip } = getPagination(page, limit);

  const laws = await Law.find({ isDeleted: false })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNum);

  const total = await Law.countDocuments({ isDeleted: false });

  return {
    total,
    page: pageNum,
    limit: limitNum,
    totalPages: Math.ceil(total / limitNum),
    data: laws,
  };
};

export const getArchivedLaws = async () => {
  const laws = await Law.find({ isDeleted: true }).sort({ updatedAt: -1 });
  return laws;
};

export const archiveLaw = async (id) => {
  const isValidId = mongoose.Types.ObjectId.isValid(id);
  if (!isValidId) return null;

  const law = await Law.findByIdAndUpdate(
    id,
    { $set: { isDeleted: true } },
    { returnDocument: "after" }
  );

  return law;
};

export const restoreLaw = async (id) => {
  const isValidId = mongoose.Types.ObjectId.isValid(id);
  if (!isValidId) return null;

  const law = await Law.findByIdAndUpdate(
    id,
    { $set: { isDeleted: false } },
    { returnDocument: "after" }
  );

  return law;
};

// Route 12 - get update history of a law
export const getLawHistory = async (id) => {
  const isValidId = mongoose.Types.ObjectId.isValid(id);
  if (!isValidId) return null;

  // we only have createdAt and updatedAt from timestamps
  // so history means returning those two dates of that document
  const law = await Law.findById(id).select("createdAt updatedAt act section section_title");
  return law;
};

// Route 13 - get summary of a law
export const getLawSummary = async (id) => {
  const isValidId = mongoose.Types.ObjectId.isValid(id);
  if (!isValidId) return null;

  // summary means returning only important fields, not full document
  // select() picks which fields to return
  const law = await Law.findById(id).select("act section section_title section_desc");
  return law;
};

// Route 14 - get random law
export const getRandomLaw = async () => {
  // countDocuments gives total count
  const total = await Law.countDocuments({ isDeleted: false });

  // Math.random() gives a number between 0 and 1
  // multiplying by total gives a random index
  const randomIndex = Math.floor(Math.random() * total);

  // skip that random number of documents and take 1
  const law = await Law.findOne({ isDeleted: false }).skip(randomIndex);
  return law;
};

// Route 15 - get trending laws
export const getTrendingLaws = async () => {
  // trending means highest views first
  const laws = await Law.find({ isDeleted: false })
    .sort({ views: -1 })
    .limit(10);

  return laws;
};