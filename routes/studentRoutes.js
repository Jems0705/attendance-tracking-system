import express from "express";
import {
    getStudents,
    getNewStudent,
} from "../controllers/studentController.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";

const router = express.Router();

router.use(verifyJWT);

router.get("/", getStudents);
router.get("/new", getNewStudent);

export default router;
