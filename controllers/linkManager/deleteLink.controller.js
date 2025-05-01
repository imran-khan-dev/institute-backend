import { deleteLinkUseCase } from "../../use-cases/linkManager/deleteLink.usecase.js";

export const deleteLinkController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLink = deleteLinkUseCase(id);
    if (!deletedLink) {
      return res.status(404).json({ message: "Link not found" });
    }
    res.json({ message: "Link deleted successfully" });
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "Error deleting Link",
      error: err.message,
    });
  }
};
