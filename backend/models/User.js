import { mongoose } from "mongoose";

const {Schema, model} = mongoose

const userSchema = new Schema(
    {
        username: {
            type: String, 
            required: true, 
            unique:true,
            trim: true
        },
        email: {
            type: String, 
            required: true, 
            unique: true,
            trim: true
        },
        password: {
            type: String, 
            required: true,
            trim: true
        },
        isAdmin: {
            type: Boolean, 
            default: false
        },
    }, 
    {timestamps: true}
)

export const User = model('User', userSchema)