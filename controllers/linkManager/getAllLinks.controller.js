import { getAllLinksUseCase } from "../../use-cases/linkManager/getAllLinks.usecase.js";

export const getAllLinksController = async (req, res) => {
  try {
    const notices = await getAllLinksUseCase();
    res.json(notices);
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "error fetching links",
      error: err.message,
    });
  }
};
