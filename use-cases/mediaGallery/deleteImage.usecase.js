import mediaGalleryImage from "../../entities/MediaGalleryImage.js";

export const deleteImageUseCase = async (id) => {
  return await mediaGalleryImage.findByIdAndDelete(id);
};
