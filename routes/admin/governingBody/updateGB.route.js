import express from "express";
import { updateGBMemberController } from "../../../controllers/GB/updateGB.controller.js";
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
    next();
  });
};

router.put("/:id", uploadMiddleware, updateGBMemberController);

export default router;
