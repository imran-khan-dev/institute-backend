import express from "express";
import { deleteInstituteCodeController } from "../../../controllers/instituteCode/deleteInstituteCode.controller.js";

const router = express.Router();

router.delete("/", deleteInstituteCodeController);

export default router;
