import express from "express";
import { authenticate, isAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/dashboard", authenticate, isAdmin, (req, res) => {
  res.json({ message: "Welcome to Admin Panel!" });
});

export default router;
