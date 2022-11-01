import {User} from '../models/User.js'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    const {username, email, password} = req.body

    try{
        const user = new User({
            username,
            email,
            password
        })
        await user.save()
        return res.status(201).json({ok: true});
    }catch(error){
        console.log(error)

        // Validar que no se registre un usuario con el mismo username. Alternativa por defecto mongoose
        if (error.code === 11000) {
            return res
            .status(400)
            .json({ error: "Ya existe un usuario con este email" });
        }
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        let user = await User.findOne({ email });

        // Comparar las contraseñas. El método comparePassword es creado en el schema
        const passwordValidated = await user.comparePassword(password);

        if (!user || !passwordValidated)
            return res.status(400).json({ error: "Credenciales incorrectas" });

        const accessToken = jwt.sign(
            {id: user._id, isAdmin: user.isAdmin},
            process.env.JWT_SECRET,
            {expiresIn: "3d"}
        )
        return res.status(200).json({user, accessToken});
    
      } catch (error) {
        return res.status(500).json({ error: "Error del servidor" });
      }
}