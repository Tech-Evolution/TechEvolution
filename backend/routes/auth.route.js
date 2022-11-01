import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { loginValidator, RegisterValidator } from "../middlewares/ValidatorManager.js";

const router = Router()

router.post('/register', RegisterValidator, register)
router.post('/login', loginValidator, login)


export default router