import express from "express";
import { getInstituteCodeController } from "../../../controllers/instituteCode/getInstituteCode.controller.js";

const router = express.Router();

router.get("/", getInstituteCodeController);

export default router;
