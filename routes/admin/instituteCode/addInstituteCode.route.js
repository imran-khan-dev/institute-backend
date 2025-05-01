import express from "express";
import { addInstituteCodeController } from "../../../controllers/instituteCode/addInstituteCode.controller.js";
const router = express.Router();
import { uploadImage } from "../../../multerStorage.js";

router.post("/", uploadImage.single("image"), addInstituteCodeController);

export default router;
