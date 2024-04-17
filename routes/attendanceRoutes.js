import express from "express";
import {
    getTimeRecords,
    getAttendance,
} from "../controllers/attendanceController.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";

const router = express.Router();

router.use(verifyJWT);

router.get("/time-records", getTimeRecords);
router.get("/scan", getAttendance);

export default router;
