import { updateImageUseCase } from "../../use-cases/mediaGallery/updateImage.usecase.js";

export const updateImageController = async (req, res) => {
  try {
    const { id } = req.params;
    const { altText, title } = req.body;

    const updateImageMeta = await updateImageUseCase({
      id,
      altText,
      title,
    });

    res.json(updateImageMeta);
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({ message: "Error updating image meta", err });
  }
};
