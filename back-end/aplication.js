const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/errors")

app.use(express.json());

//Importar rutas
const productos = require("./routes/product");

const usuario = require("./routes/auth");

app.use('/api', usuario);
app.use('/api', productos); //ruta para ver en el navegador

//MiddleWares para manejar errores
app.use(errorMiddleware);

module.exports = app;