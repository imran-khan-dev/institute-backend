import SliderImage from "../../entities/Slider.js";

export const updatedSliderUseCase = async ({ id, title, file }) => {
  const slider = await SliderImage.findById(id);
  if (!slider) {
    throw new Error("Slider not found");
  }

  if (title) {
    slider.title = title;
  }

  if (file) {
    slider.imageUrl = file.path;
  }

  await slider.save();
  return slider;
};
