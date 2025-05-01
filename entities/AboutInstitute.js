import mongoose from "mongoose";

const aboutInstituteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const aboutInstitute = mongoose.model("aboutInstitute", aboutInstituteSchema);

export default aboutInstitute;
