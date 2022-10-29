import { mongoose } from "mongoose";

const {Schema, model} = mongoose

const cartSchema = new Schema(
    {
        userid: {
            type: String,
            required: true
        },
        products: [
            {
                productId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ]
    },
    {timestams: true}
)

export const Cart = model('Cart', cartSchema)