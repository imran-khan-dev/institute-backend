import express from "express";
import { addUpdateHeadlineController } from "../../../controllers/updateHeadline/addUpdateHeadline.controller.js";
const router = express.Router();

router.post("/", addUpdateHeadlineController);

export default router;
