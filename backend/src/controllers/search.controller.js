import { searchLaws } from "../services/search.service.js";

export const searchLawsByKeyword = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q || !q.trim()) {
      return res.status(400).json({
        success: false,
        message: "Search query 'q' is required",
      });
    }

    const laws = await searchLaws(q.trim());

    if (!laws.length) {
      return res.status(200).json({
        success: true,
        message: `No laws found for "${q.trim()}"`,
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: `Laws fetched for "${q.trim()}"`,
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