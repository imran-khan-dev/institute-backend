import { getAllSlidersUseCase } from "../../use-cases/slider/getAllSliders.usecase.js";

export const getAllSlidersController = async (req, res) => {
  try {
    const slides = await getAllSlidersUseCase();
    res.json(slides);
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "Error fetching slides",
      error: err.message,
    });
  }
};
