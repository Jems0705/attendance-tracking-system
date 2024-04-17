import express from "express";
import { getProfile } from "../controllers/profileController.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";

const router = express.Router();

router.use(verifyJWT);

router.get("/", getProfile);

export default router;
