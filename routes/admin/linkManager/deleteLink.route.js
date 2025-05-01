import express from "express";
import { deleteLinkController } from "../../../controllers/linkManager/deleteLink.controller.js";
const router = express.Router();

router.delete("/:id", deleteLinkController);

export default router;
