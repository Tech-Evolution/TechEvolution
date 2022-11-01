import { Product } from "../models/Product.js"

export const getProducts = async (req, res) => {
    const qLatest = req.query.latest
    const qCategory = req.query.category
    try {
        let products;

        if(qLatest){
            products = await Product.find().sort({createdAt: -1}).limit(5)
        }else if(qCategory) {
            products = await Product.find({category: qCategory})
        }else{
            products = await Product.find()
        }
        return res.json({products})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Error del servidor"})
    }

}

export const createProduct = async (req, res) => {
    const product = new Product(req.body)

    try { 
        const newProduct = await product.save()    
        return res.status(201).json({newProduct})

    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: "Ya existe un producto con este nombre" });
        }
        return res.status(500).json({error: "Error del servidor"})
    }
}

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
        return res.status(500).json(error)
    }
}

export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params._id,
            {$set: req.body},
            {new: true}
        )
        return res.status(200).json(product)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


