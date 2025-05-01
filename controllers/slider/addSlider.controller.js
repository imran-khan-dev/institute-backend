import { addNewSliderUseCase } from "../../use-cases/slider/addNewSlider.usecase.js";

export const addSliderController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file uploaded." });
    }
    const title = req.body.title;
    const imageUrl = req.file.path;

    const newSlider = addNewSliderUseCase(title, imageUrl);

    res.json(newSlider);
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "Error adding new slider",
      error: err.message,
    });
  }
};
