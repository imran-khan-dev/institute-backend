import express from "express";
import { getAllLinksController } from "../../../controllers/linkManager/getAllLinks.controller.js";

const router = express.Router();

// Get all slides
router.get("/", getAllLinksController);

export default router;
