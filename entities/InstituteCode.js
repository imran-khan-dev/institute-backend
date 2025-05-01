import mongoose from "mongoose";

const instituteCodeSchema = new mongoose.Schema(
  {
    eIINNum: {
      type: String,
      required: false,
    },
    instituteCode: {
      type: String,
      required: false,
    },
    regNum: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const instituteCode = mongoose.model("instituteCode", instituteCodeSchema);

export default instituteCode;
