const express = require("express");
const ruter=express.Router();

const {getProduct, newProduct, getProductById, updateProduct, deleteProductById} = require("../controlador/productosControllers")

ruter.route('/productos').get(getProduct) //esta es la ruta por la que vamos a ver todos los productos
ruter.route('/productos/nuevo').post(newProduct); 
ruter.route('/productos/:id').get(getProductById); //Ruta para ver el producto teniendo en cuenta el ID
ruter.route('/productos/:id').put(updateProduct); //Ruta para actializar el producto
ruter.route('/productos/:id').delete(deleteProductById); //Ruta para elmininar el producto por el Id 

module.exports=ruter;
