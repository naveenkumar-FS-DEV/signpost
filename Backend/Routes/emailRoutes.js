import express from "express";
import { sendEmailController } from "../Controllers/emailController.js";

const router = express.Router();

router.post("/send-email", sendEmailController);

export default router;
