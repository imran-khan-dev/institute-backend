import express from "express";
import { deleteMarkNoticesController } from "../../../controllers/notice/deleteMarkNotice.controller.js";

const router = express.Router();

// Delete mark notices
router.delete("/", deleteMarkNoticesController);

export default router;
