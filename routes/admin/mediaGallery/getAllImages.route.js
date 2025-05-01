import express from "express";
import { getAllImagesController } from "../../../controllers/mediaGallery/getAllImages.controller.js";

const router = express.Router();

// Get all photos
router.get("/", getAllImagesController);

export default router;
