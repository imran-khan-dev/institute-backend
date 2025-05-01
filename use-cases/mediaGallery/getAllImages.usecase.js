import MediaGalleryImage from "../../entities/MediaGalleryImage.js";

export const getAllImagesUseCase = async ({ page, limit }) => {
  const skip = (page - 1) * limit;
  const total = await MediaGalleryImage.countDocuments();
  const images = await MediaGalleryImage.find()
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  return {
    images,
    totalPages: Math.ceil(total / limit),
  };
};
