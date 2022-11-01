import {Router} from 'express'
import { createProduct, getProduct, getProducts, removeProduct, updateProduct } from '../controllers/product.controller.js'
import { adminTokenRequire } from '../middlewares/tokenRequire.js'
const router = Router()

router.get('/', getProducts)
router.get('/:_id', getProduct)
router.post('/', adminTokenRequire, createProduct)
router.put('/:_id', adminTokenRequire, updateProduct)
router.delete('/:_id',adminTokenRequire, removeProduct)

export default router;