import {
  filterByAct,
  filterByChapter,
  filterBySection,
  filterRecentLaws,
  filterTrendingLaws,
} from "../services/filter.service.js";

export const fetchLawsByAct = async (req, res) => {
  try {
    const laws = await filterByAct(req.params.actName);
    res.status(200).json({
      success: true,
      message: `Laws fetched for act "${req.params.actName.toUpperCase()}"`,
      data: laws,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const fetchLawsByChapter = async (req, res) => {
  try {
    const laws = await filterByChapter(req.params.chapterId);
    res.status(200).json({
      success: true,
      message: `Laws fetched for chapter ${req.params.chapterId}`,
      data: laws,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const fetchLawsBySection = async (req, res) => {
  try {
    const laws = await filterBySection(req.params.sectionNumber);
    res.status(200).json({
      success: true,
      message: `Laws fetched for section ${req.params.sectionNumber}`,
      data: laws,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const fetchRecentLaws = async (req, res) => {
  try {
    const laws = await filterRecentLaws();
    res.status(200).json({
      success: true,
      message: "Recent laws fetched successfully",
      data: laws,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const fetchTrendingLaws = async (req, res) => {
  try {
    const laws = await filterTrendingLaws();
    res.status(200).json({
      success: true,
      message: "Trending laws fetched successfully",
      data: laws,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};


