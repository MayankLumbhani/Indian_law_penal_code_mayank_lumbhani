import mongoose from "mongoose";
import Law from "../models/law.model.js";

export const searchLaws = async (query) => {
  const laws = await Law.find({
    $text: { $search: query },
    isDeleted: false,
  }).sort({ score: { $meta: "textScore" } });

  return laws;
};