import mongoose from "mongoose";

const governingBodySchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const GoverningBodyMember = mongoose.model(
  "GoverningBodyMember",
  governingBodySchema
);

export default GoverningBodyMember;
