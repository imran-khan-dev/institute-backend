import express from "express";
import { uploadImageAndPdf } from "../../../multerStorage.js";
import { addNoticeController } from "../../../controllers/notice/addNotice.controller.js";
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
    
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }
    next();
  });
};

router.post("/", uploadMiddleware, addNoticeController);

export default router;
