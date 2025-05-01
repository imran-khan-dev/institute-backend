import { deleteImageUseCase } from "../../use-cases/mediaGallery/deleteImage.usecase.js";

export const deleteImageController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedImage = deleteImageUseCase(id);
    if (!deletedImage) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.json({ message: "Image deleted successfully" });
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({ message: "Error deleting image", err });
  }
};
