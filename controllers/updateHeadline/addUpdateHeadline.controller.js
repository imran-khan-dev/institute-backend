import { addUpdateHeadlineUseCase } from "../../use-cases/updateHeadline/addHeadline.usecase.js";

export const addUpdateHeadlineController = async (req, res) => {
  try {
    const headline = req.body.headline;
    if (!headline) {
      return res.status(400).json({ error: "Headline is required" });
    }
    const newUpdateHeadline = addUpdateHeadlineUseCase({ headline });
    res.status(200).json(newUpdateHeadline);
    console.log(newUpdateHeadline);
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "Error adding new Update Headline",
      error: err.message,
    });
  }
};
