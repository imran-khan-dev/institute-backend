import express from "express";
import { addGBMemberController } from "../../../controllers/GB/uploadGB.controller.js";
import {uploadImage} from "../../../multerStorage.js";
const router = express.Router();

// Middleware to handle upload errors
const uploadMiddleware = (req, res, next) => {
  uploadImage.single("image")(req, res, function (err) {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res
          .status(400)
          .json({ error: "File is too large! Maximum size allowed is 5MB." });
      }
      return res.status(400).json({ error: err.message });
    }
    if (!req.file) {
      return res.status(400).json({ error: "No image file uploaded." });
    }
    next();
  });
};

// Route with explicit error-handling middleware
router.post("/", uploadMiddleware, addGBMemberController);

export default router;
