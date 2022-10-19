const express = require("express");
const app = express();

app.use(express.json());

//Importar rutas
const productos = require("./routes/product");

app.use('/api',productos); //ruta para ver en el navegador

module.exports = app;