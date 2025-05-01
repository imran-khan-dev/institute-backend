import express from "express";
import {uploadImage} from "../../../multerStorage.js";
import { addSliderController } from "../../../controllers/slider/addSlider.controller.js";

const router = express.Router();

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

// Upload a new slide
router.post("/", uploadMiddleware, addSliderController);

export default router;
