import SliderImage from "../../entities/Slider.js";

export const getAllSlidersUseCase = async () => {
  return await SliderImage.find();
};
