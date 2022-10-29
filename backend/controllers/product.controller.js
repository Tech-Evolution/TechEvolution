import { Product } from "../models/Product.js"

export const getProducts = async (req, res) => {

    try {
        const products = await Product.find()
        
        return res.json({products})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Error del servidor"})
    }

}

export const createProduct = async (req, res) => {
    try { 
        let {name, description, category, price, image } = req.body // Recuperar los parámetros del body

        const product = new Product({name, description, category, price, image})
        const newProduct = await product.save()
     
        console.log(newProduct)
        
        return res.status(201).json({newProduct})

    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Error del servidor"})
    }

}


// Se usa para realiza un crud tradicional
export const getProduct = async (req, res) => {

    try {
        const {_id} = req.params
        const product = await Product.findById(_id)

        if(!product) 
            return res.status(404).json({error: "Producto not found or not exists"})

        return res.json({product})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Error del servidor"})
    }

}


export const removeProduct = async (req, res) => {

    try {
        const {_id} = req.params
        const product = await Product.findById(_id)

        if(!product) 
            return res.status(404).json({error: "Product not found or not exists"})
        
        await product.remove()
        return res.json({product})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Error del servidor"})
    }
}

export const updateProduct = async (req, res) => {
    try {
        const {_id} = req.params
        const {name, description, category, price, image } = req.body

        const product = await Product.findById(_id)

        if(!product) 
            return res.status(404).json({error: "Product not found or not exists"})
        
        // Actualizar
        product.name = name
        product.description = description
        product.category = category
        product.price = price
        product.image = image

        await product.save()
        
        return res.json({product})

    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Error del servidor"})
    }
}
