import {User} from '../models/User.js'
import CryptoJS from 'crypto-js'

export const register = async (req, res) => {
    // const {CryptoJS} = pkg
    const {username, email, password} = req.body

    try{
        const user = new User({
            username,
            email,
            password: CryptoJS.AES.encrypt(JSON.stringify(password), process.env.SECRET_PASSWORD).toString()
        })
        await user.save()
        return res.status(201).json({ok: true});
    }catch(error){
        console.log(error)

        // Validar que no se registre un usuario con el mismo correo. Alternativa pro defecto mongoose
        if (error.code === 11000) {
            return res
            .status(400)
            .json({ error: "Ya existe un usuario con este email" });
        }
        return res.status(500).json({ error: "Internal Server Error" });
    }
    

}