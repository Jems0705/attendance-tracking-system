import express from "express";
import { getClasses, getNewClass } from "../controllers/classController.js";

const router = express.Router();

router.get("/", getClasses);
router.get("/new", getNewClass);

export default router;
