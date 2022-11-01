import { Router } from "express";
import { deleteUser, getUser, getUsers, statsUser, updateUser } from "../controllers/users.controller.js";
import { adminTokenRequire, tokenRequire } from "../middlewares/tokenRequire.js";

const router = Router()

router.get('/', adminTokenRequire, getUsers)
router.put('/:_id', tokenRequire, updateUser)
router.delete('/:_id', tokenRequire, deleteUser)
router.get('/find/:_id', adminTokenRequire, getUser)
router.get('/stats', adminTokenRequire, statsUser)


export default router