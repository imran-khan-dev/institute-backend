import mongoose from "mongoose";

const linkSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const LinkManager = mongoose.model("LinkManager", linkSchema);

export default LinkManager;
