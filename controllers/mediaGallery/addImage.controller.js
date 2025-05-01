import { addImageUseCase } from "../../use-cases/mediaGallery/addImage.usecase.js";

export const addImageController = async (req, res) => {
  try {
    const uploadedImages = await addImageUseCase(req.files);

    res.status(200).json({
      message: "Images uploaded and saved to DB successfully",
      images: uploadedImages,
    });
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({ message: "Error saving image data", err });
  }
};
