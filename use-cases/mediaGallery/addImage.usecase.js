import mediaGalleryImage from "../../entities/MediaGalleryImage.js";

export const addImageUseCase = async (files) => {
  const uploadedImages = await Promise.all(
    files.map(async (file) => {
      const image = new mediaGalleryImage({
        url: file.path, 
        public_id: file.filename, 
        altText: "",
        title: "",
        caption: "",
      });

      await image.save();
      return image;
    })
  );

  return uploadedImages;
};
