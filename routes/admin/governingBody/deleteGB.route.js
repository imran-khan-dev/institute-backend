import express from "express";
import { deleteGBMemberController } from "../../../controllers/GB/deleteGB.controller.js";

const router = express.Router();

// Delete a governing body member
router.delete("/:id", deleteGBMemberController);

export default router;
