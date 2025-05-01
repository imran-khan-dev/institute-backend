import express from "express";
import { deleteMarkImagesController } from "../../../controllers/mediaGallery/deleteMarkImages.controller.js";

const router = express.Router();

// Delete Mark Photos
router.delete("/", deleteMarkImagesController);

export default router;
