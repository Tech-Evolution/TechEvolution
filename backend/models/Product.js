
import mongoose from 'mongoose'
const {Schema, model} = mongoose

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            default: 0
        }, 
        image:{
            type: String,
            required: true,
            trim: true
        },
    },
    {timestams: true}
) 

export const Product = model('Product', productSchema)