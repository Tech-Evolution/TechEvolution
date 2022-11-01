import { Cart } from "../models/Cart.js"

export const getCarts = async (req, res) => {
    try {
        const carts = Cart.find()

        return res.status(200).json(carts)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const createCart = async (req, res) => {
    const cart = new Cart(req.body)

    try { 
        const newCart = await cart.save()
     
        console.log(newCart)
        
        return res.status(201).json({newCart})

    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Error del servidor"})
    }

}


// Se usa para realiza un crud tradicional
export const getCart = async (req, res) => {

    try {
        const cart = await Cart.findOne({userId: req.params.userId})

        if(!cart) 
            return res.status(404).json({error: "Cart not found or not exists"})

        return res.json({cart})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Error del servidor"})
    }

}


export const removeCart = async (req, res) => {

    try {
        const {_id} = req.params
        const cart = await Cart.findById(_id)

        if(!cart) 
            return res.status(404).json({error: "cart not found or not exists"})
        
        await cart.remove()
        return res.json({cart})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Error del servidor"})
    }
}

export const updateCart = async (req, res) => {
    try {
        const cart = await Cart.findByIdAndUpdate(
            req.params._id,
            {$set: req.body},
            {new: true}
        )
        return res.status(200).json(cart)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


