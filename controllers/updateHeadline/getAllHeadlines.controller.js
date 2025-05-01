import { getAllHeadlinesUseCase } from "../../use-cases/updateHeadline/getAllHeadlines.usecase.js";

export const getAllHeadlinesController = async (req, res) => {
  try {
    const headlines = await getAllHeadlinesUseCase();
    res.json(headlines);
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "error fetching headings",
      error: err.message,
    });
  }
};
