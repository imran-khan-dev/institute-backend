import express from "express";
import { getAllHeadlinesController } from "../../../controllers/updateHeadline/getAllHeadlines.controller.js";

const router = express.Router();

// Get all headings
router.get("/", getAllHeadlinesController);

export default router;
