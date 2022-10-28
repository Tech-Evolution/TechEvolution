const connectDatabase = require("./configuraciones/basedatos");

const app= require("./aplication")


const dotevn=require("dotenv");
dotevn.config({path: 'back-end/configuraciones/config.env'})

//Configurar dataBase

connectDatabase();

const server= app.listen(process.env.PORT, () => {
    console.log(`Seridor inicializado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_EVN}`)
})
