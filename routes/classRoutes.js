import express from "express";
import { getClasses, getNewClass } from "../controllers/classController.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";

const router = express.Router();

router.use(verifyJWT);

router.get("/", getClasses);
router.get("/new", getNewClass);

export default router;
