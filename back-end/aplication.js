const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/errors")
const cookieParser= require("cookie-parser")

//Uso de constantes importadas 
app.use(express.json());
app.use(cookieParser());

//Importar rutas
const productos = require("./routes/product");
const ordenes = require("./routes/orders")
const usuario = require("./routes/auth");

//ruta para ver en el navegador
app.use('/api', usuario);
app.use('/api', ordenes)
app.use('/api', productos);

//MiddleWares para manejar errores
app.use(errorMiddleware);

module.exports = app;