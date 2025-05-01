import mongoose from "mongoose";

const updateHeadlineSchema = new mongoose.Schema(
  {
    headline: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UpadteHeadline = mongoose.model("updateHeadline", updateHeadlineSchema);

export default UpadteHeadline;
