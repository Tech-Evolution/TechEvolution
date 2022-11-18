const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/errors")
const cookieParser= require("cookie-parser")
const bodyParser = require('body-parser')
const fileUpload = require("express-fileupload");

//Uso de constantes importadas 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(fileUpload());

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