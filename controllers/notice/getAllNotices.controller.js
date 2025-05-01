import { getAllNoticesUseCase } from "../../use-cases/notice/getAllNotices.usecase.js";

export const getAllNoticesController = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const result = await getAllNoticesUseCase({ page, limit });
    res.json(result);
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({ error: "Failed to fetch notices" });
  }
};
