const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto = require("../Models/product");
const APIFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");
const fetch = (url) => import('node-fetch').then(({ default: fetch }) => fetch(url)); //Usurpación del require


//Ver listas de productos

exports.getProduct = catchAsyncErrors(async (req, res, next) => {
    const productos = await producto.find();
    if (!productos) {
        return next(new ErrorHandler("Informacion no encontrada", 404))
    }

    res.status(200).json({
        success: true,
        cantidad: productos.length,
        productos
    })
})

//Ver el producto teniendo en cuenta el ID

exports.getProductById = catchAsyncErrors(async (req, res, next) => {
    const productById = await producto.findById(req.params.id)
    if (!productById) {
        return next(new ErrorHandler("Producto no encontrado", 404))
    }

    res.status(200).json({
        success: true,
        message: "Aqui debajo encuentras información sobre tu producto: ",
        productById
    })
})


//Crear nuevo producto /api/productos
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
    req.body.user = req.user.id;
    const newProduct = await producto.create(req.body);

    res.status(201).json({
        success: true,
        newProduct
    })
})

//Actualizar un producto
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let updateProductById = await producto.findById(req.params.id)
    if (!updateProductById) { //Para ver si el producto es existente
        return next(new ErrorHandler("Producto no encontrado", 404))
    }



    //Si existe lo actualizo
    updateProductById = await producto.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        mensaje: 'El producto se actualizo con exito',
        updateProductById

    })
})

//Eliminar un producto por el id
exports.deleteProductById = catchAsyncErrors(async (req, res, next) => {
    const deleteProducto = await producto.findById(req.params.id)
    if (!deleteProducto) { //Para ver si el producto es existente
        return next(new ErrorHandler("Producto no encontrado", 404))

    }

    await deleteProducto.remove(); //Se elimina el producto y se le informa con un mensaje
    res.status(200).json({
        success: true,
        mensaje: 'El producto se eliminado'
    })
})
