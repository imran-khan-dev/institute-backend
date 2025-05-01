import express from "express";
import { getSingleNoticeController } from "../../../controllers/notice/getSingleNotice.controller.js";

const router = express.Router();

// Get Single Notice
router.get("/:id", getSingleNoticeController);

export default router;
