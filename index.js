import 'dotenv/config' // enviroment variables
import './backend/database/connectdb.js' // Database conectction module
import express from 'express'  // Import express

import productRouter from './backend/routes/product.route.js'

const PORT = process.env.PORT 
const app = express()           // object express

app.use(express.json())  // Permite leer las solicitidues en json

app.use('/techevolution/products', productRouter)

// Archivos estaticos
// app.use(express.static('public'))


// Listen method to server connection
app.listen(PORT, () => {
    console.log("✔✔✔ https://localhost: " + PORT)
})