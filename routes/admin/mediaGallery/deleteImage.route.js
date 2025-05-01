import express from "express";
import { deleteImageController } from "../../../controllers/mediaGallery/deleteImage.controller.js";

const router = express.Router();

router.delete("/:id", deleteImageController);

export default router;
