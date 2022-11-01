import { User } from "../models/User.js";
import bcryptjs from "bcryptjs"

export const getUsers = async  (req, res) => {
    // Enviar y recibir parámetro por medio de la url del navegador (filtra los primeros 5 registros)
    const query = req.query.latest
    try {
        const user = query ? await User.find().sort({_id: -1}).limit(4): await User.find()
        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getUser = async  (req, res) => {
    try {
        const user = await User.findById(req.params._id)
        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json(error)
    }
}

export const updateUser = async  (req, res) => {
    if(req.body.password){
        const salt = await bcryptjs.genSalt(10)
        req.body.password = await bcryptjs.hash(req.body.password, salt) 
    }
    try {
        const user = await User.findByIdAndUpdate(
            req.params._id,
            {$set: req.body},
            {new: true}
        )
        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

export const deleteUser = async  (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params._id)
        return res.status(200).json(`El usuario ${user.username} ha sido eliminado`)
    } catch (error) {

        return res.status(500).json(error)
    }
}

// Obtener estadísticas para el registro de usuarios
export const statsUser = async (req, res ) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() -1)); // Extraer el año inmediatamente anterior

    try {
        const data = await User.aggregate([
            {
                $match: {createdAt: {$gte: lastYear}} //Elegir los usuarios que se han creado en el año > a lastYear
            },
            {
                $project: {month: {$month: "$createdAt"}} //Elegir el mes que es´ta registrado en la base de datos
            },
            {
                $group: {_id: "$month",total: {$sum: 1}} // agrupar los registros por el mes y se suman los totales
            }
        ])
        return res.status(200).json(data)

    }catch(error){
        return res.status(500).json(error)
    }
}
