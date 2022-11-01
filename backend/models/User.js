import { mongoose } from "mongoose";
import bcryptjs from 'bcryptjs'

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

// Permite crear funcionalidad al momento de guardar un objeto del esquema. Esta función se ejecutará cuando se guarde un objeto.
userSchema.pre("save", async function(next){
    const user = this // Recuperamos el objeto

    if(!user.isModified('password')) return next() // Validar que al actualizar un usuario la contraseña se modifique

    try {
        const salt = await bcryptjs.genSalt(10) // Se generan los saltos para la encriptación
        user.password = await bcryptjs.hash(user.password, salt) // Se asigna al objeto en su campo password el hash de la contraseña
        next()
    }catch(e){
        console.log(e)
        throw new Error("Fallo en la encriptación")
    }
})

// Comparar las contraseñas para el login
userSchema.methods.comparePassword = async function(candidatePassword){
    return await bcryptjs.compare(candidatePassword, this.password)
}


export const User = model('User', userSchema)