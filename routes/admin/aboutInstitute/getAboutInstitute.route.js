import express from "express";
import { getAboutInstituteController } from "../../../controllers/aboutInstitute/getAboutInstitute.controller.js";

const router = express.Router();

router.get("/", getAboutInstituteController);

export default router;
