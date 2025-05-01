import { deleteSliderUseCase } from "../../use-cases/slider/deleteSlider.usecase.js";

export const deleteSliderController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSlider = deleteSliderUseCase(id);
    if (!deletedSlider) {
      return res.status(404).json({ message: "Slider not found" });
    }
    res.json({ message: "Slider deleted successfully" });
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "Error deleting slider",
      error: err.message,
    });
  }
};
