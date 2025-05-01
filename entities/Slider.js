import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SliderImage = mongoose.model("SliderImage", sliderSchema);

export default SliderImage;
