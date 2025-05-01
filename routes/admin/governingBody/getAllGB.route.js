import express from "express";
import { getAllGBMembersController } from "../../../controllers/GB/getAllGB.controller.js";

const router = express.Router();

router.get("/", getAllGBMembersController);

export default router;
