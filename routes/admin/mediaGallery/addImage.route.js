import express from "express";
import { addImageController } from "../../../controllers/mediaGallery/addImage.controller.js";
import { uploadImage } from "../../../multerStorage.js";

const router = express.Router();

const uploadMiddleware = (req, res, next) => {
  uploadImage.array("images", 10)(req, res, function (err) {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({
          error:
            "One or more of your files are too large! Max file size is 5MB.",
        });
      }
      return res.status(400).json({ error: err.message });
    }

    if (!req.files) {
      return res.status(400).json({ error: "No file uploaded." });
    }
    next();
  });
};

router.post("/", uploadMiddleware, addImageController);

export default router;
