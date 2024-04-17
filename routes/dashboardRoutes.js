import express from "express";
import { getDashboard } from "../controllers/dashboardController.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";

const router = express.Router();

router.use(verifyJWT);

router.get("/", getDashboard);

export default router;
