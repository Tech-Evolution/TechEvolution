const express = require ("express")
const router=express.Router();

const {getProduct, newProduct, getProductById, updateProduct, deleteProductById} = require("../controlador/productosControllers")
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route('/productos').get(getProduct) //esta es la ruta por la que vamos a ver todos los productos
router.route('/producto/new').post(isAuthenticatedUser, authorizeRoles("admin"), newProduct); //Esta es la ruta para crear nuevos productos
router.route('/producto/:id').get(getProductById); //Ruta para ver el producto teniendo en cuenta el ID
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct); //Ruta para actializar el producto
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProductById); //Ruta para elmininar el producto por el Id 

module.exports=router;