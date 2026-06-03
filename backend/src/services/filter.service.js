import mongoose from "mongoose";
import Law from "../models/law.model.js";

export const filterByAct = async (actName) => {
  const laws = await Law.find({
    act: actName.toUpperCase(),
    isDeleted: false,
  });
  return laws;
};

export const filterByChapter = async (chapterId) => {
  const laws = await Law.find({
    chapter: Number(chapterId),
    isDeleted: false,
  });
  return laws;
};

export const filterBySection = async (sectionNumber) => {
  const laws = await Law.find({
    section: sectionNumber,
    isDeleted: false,
  });
  return laws;
};

export const filterRecentLaws = async () => {
  const laws = await Law.find({ isDeleted: false })
    .sort({ createdAt: -1 })
    .limit(10);
  return laws;
};

export const filterTrendingLaws = async () => {
  const laws = await Law.find({ isDeleted: false })
    .sort({ views: -1 })
    .limit(10);
  return laws;
};