import {Router} from 'express'
import { createProduct, getProduct, getProducts, removeProduct, updateProduct } from '../controllers/product.controller.js'
const router = Router()

// GET /api/v1/links all links
router.get('/', getProducts)

// GET /api/v1/links:id single link
router.get('/:_id', getProduct)

// POST /api/v1/links create link
router.post('/',createProduct)

// PATCH/PUT /api/v1/links:id update link
router.patch('/:_id', updateProduct)

// DELETE /api/v1/links:id remove link
router.delete('/:_id',removeProduct)

export default router;