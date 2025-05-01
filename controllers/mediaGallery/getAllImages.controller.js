import { getAllImagesUseCase } from "../../use-cases/mediaGallery/getAllImages.usecase.js";

export const getAllImagesController = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const result = await getAllImagesUseCase({ page, limit });
    res.json(result);
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "error fetching images",
      error: err.message,
    });
  }
};
