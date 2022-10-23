const producto = require("../Models/product")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpación del require

//Ver listas de productos

exports.getProduct = async (req, res, next) => {
    const productos = await producto.find();
    if (!productos){
        return res.status(404).json({
            success:false,
            error:true
        })
    }


    res.status(200).json({
        success: true,
        cantidad: productos.length,
        productos
    })
}

//Ver el producto teniendo en cuenta el ID

exports.getProductById = async (req, res, next) => {
    const productById = await producto.findById(req.params.id)
    if (!productById) {
        res.status(404).json({
            success: false,
            menssage: "El producto no exste",
            error:true
        })

    }

    res.status(200).json({
        success: true,
        mensaje: "A continuacion encontraras la informacion del producto",
        productById
    })
}
//Crear nuevo producto /api/productos

exports.newProduct = async (req, res, next) => {
    const newProduct = await producto.create(req.body);

    res.status(201).json({
        success: true,
        newProduct
    })
}

//Actualizar un producto
exports.updateProduct = async (req, res, next) => {
    let updateProductById = await producto.findById(req.params.id)
    if (!updateProductById) { //Para ver si el producto es existente
        return res.status(404).json({
            success: false,
            menssage: 'El producto no exste'
        })

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
}

//Eliminar un producto por el id

exports.deleteProductById = async (req, res, next) => {
    const deleteProducto = await producto.findById(req.params.id)
    if (!deleteProducto) { //Para ver si el producto es existente
        return res.status(404).json({
            success: false,
            menssage: 'El producto no exste'
        })

    }

    await deleteProducto.remove(); //Se elimina el producto y se le informa con un mensaje
    req.status(200).json({
        success: true,
        mensaje: 'El producto se eliminado'
    })
}





