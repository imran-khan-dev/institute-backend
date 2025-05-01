import SliderImage from "../../entities/Slider.js";

export const deleteSliderUseCase = async (id) => {
  return await SliderImage.findByIdAndDelete(id);
};
