import express from "express";
import { uploadImageAndPdf } from "../../../multerStorage.js";
import { updateNoticeController } from "../../../controllers/notice/updateNotice.controller.js";
const router = express.Router();

const uploadMiddleware = (req, res, next) => {
  uploadImageAndPdf.single("file")(req, res, function (err) {
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

// Update a notice
router.put("/:id", uploadMiddleware, updateNoticeController);

export default router;
