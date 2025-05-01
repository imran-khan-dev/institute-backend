import express from "express";
import { deleteNoticeController } from "../../../controllers/notice/deleteNotice.controller.js";

const router = express.Router();

// Delete a slide
router.delete("/:id", deleteNoticeController);

export default router;
