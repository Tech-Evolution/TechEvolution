import { Router } from "express";
import { register } from "../controllers/auth.controller.js";
import { RegisterValidator } from "../middlewares/ValidatorManager.js";

const router = Router()

router.post('/register', RegisterValidator, register)


export default router