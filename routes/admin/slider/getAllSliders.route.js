import express from "express";
import { getAllSlidersController } from "../../../controllers/slider/getAllSliders.controller.js";

const router = express.Router();

// Get all slides
router.get("/", getAllSlidersController);

export default router;
