import express from "express";
import { updateImageController } from "../../../controllers/mediaGallery/updateImage.controller.js";

const router = express.Router();

router.put("/:id", updateImageController);

export default router;
