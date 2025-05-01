import express from "express";
import { getAllNoticesController } from "../../../controllers/notice/getAllNotices.controller.js";

const router = express.Router();

// Get all notices
router.get("/", getAllNoticesController);

export default router;
