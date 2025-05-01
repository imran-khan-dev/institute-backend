import express from "express";
import { deleteSliderController } from "../../../controllers/slider/deleteSlider.controller.js";

const router = express.Router();

// Delete a slide
router.delete("/:id", deleteSliderController);

export default router;
