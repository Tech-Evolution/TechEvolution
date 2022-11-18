const connectDatabase = require("./configuraciones/basedatos");
const app= require("./aplication")
const cloudinary= require("cloudinary")

const dotevn=require("dotenv");
dotevn.config({path: 'back-end/configuraciones/config.env'})

//Configurar dataBase
connectDatabase();


//Configurar Cloudinary
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const server= app.listen(process.env.PORT, () => {
    console.log(`Seridor inicializado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_EVN}`)
})
