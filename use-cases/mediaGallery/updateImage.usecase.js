import mediaGalleryImage from "../../entities/MediaGalleryImage.js";

export const updateImageUseCase = async ({ id, altText, title }) => {
  const updatedImage = await mediaGalleryImage.findById(id);
  if (altText) {
    updatedImage.altText = altText;
  }
  if (title) {
    updatedImage.title = title;
  }

  await updatedImage.save();
  console.log("Image Meta Updated successfully");
  return updatedImage;
};
