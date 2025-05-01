import express from "express";
import { deleteAboutController } from "../../../controllers/aboutInstitute/deleteAboutInstitute.controller.js";

const router = express.Router();

router.delete("/", deleteAboutController);

export default router;
