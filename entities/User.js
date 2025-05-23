import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["admin"], default: "user" },
  },
  { timestamps: true }
);

const user = mongoose.model("User", userSchema);

export default user;
