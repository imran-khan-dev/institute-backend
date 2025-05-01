import express from "express";
import { uploadImage } from "../../../multerStorage.js";
import { updateSliderController } from "../../../controllers/slider/updateSlider.controller.js";
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
    next();
  });
};

// Update a slider
router.put("/:id", uploadMiddleware, updateSliderController);

export default router;
