import { Router } from "express";
import { createCart, getCart, getCarts, removeCart, updateCart } from "../controllers/cart.controller.js";
import { adminTokenRequire, tokenRequire, verifyToken } from "../middlewares/tokenRequire.js";

const router = Router()

router.post('/', verifyToken, createCart)
router.post('/:_id', tokenRequire, updateCart)
router.post('/:_id', tokenRequire, removeCart)
router.post('/:userId', tokenRequire, getCart)
router.post('/', adminTokenRequire, getCarts)


export default router