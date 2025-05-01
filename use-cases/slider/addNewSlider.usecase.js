import SliderImage from "../../entities/Slider.js";

export const addNewSliderUseCase = async (title, imageUrl) => {
  const newSlider = new SliderImage({
    title,
    imageUrl,
  });

  await newSlider.save();
  return newSlider;
};
