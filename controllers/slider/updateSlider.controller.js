import { updatedSliderUseCase } from "../../use-cases/slider/updateSlider.usecase.js";

export const updateSliderController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const file = req.file;

    const updatedSlider = await updatedSliderUseCase({ id, title, file });

    res.json(updatedSlider);
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "Error updating slider",
      error: err.message,
    });
  }
};
