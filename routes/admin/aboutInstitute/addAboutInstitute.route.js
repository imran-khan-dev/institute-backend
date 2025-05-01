import express from "express";
import { addAboutController } from "../../../controllers/aboutInstitute/addAboutInstitute.controller.js";
import { uploadImage } from "../../../multerStorage.js";

const router = express.Router();

router.post("/", uploadImage.single("image"), addAboutController);

export default router;
