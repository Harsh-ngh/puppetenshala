import express from "express";
import { startAutomation, continueAutomation } from "../Controllers/AutomationController.js";

const router = express.Router();

router.post("/start", startAutomation);
router.post("/continue", continueAutomation);

export default router;
