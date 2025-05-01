import express from "express";
import { deleteAllHeadlines } from "../../../controllers/updateHeadline/deleteAllHeadlines.controller.js";

const router = express.Router();

// Delete all Headlines
router.delete("/", deleteAllHeadlines);

export default router;
