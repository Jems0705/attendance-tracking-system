import express from "express";
import {
    getStudents,
    getNewStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getStudents);
router.get("/new", getNewStudent);

export default router;
