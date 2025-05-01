import express from "express";
import { addLinkController } from "../../../controllers/linkManager/addLink.controller.js";
const router = express.Router();

router.post("/", addLinkController);

export default router;
