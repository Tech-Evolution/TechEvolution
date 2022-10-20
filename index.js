const dotenv = require('dotenv/config') // enviroment variables
const express = require('express')  // Import express

const PORT = process.env.PORT 
const app = express()           // object express

app.use(express.json())  // Permite leer las solicitidues en json

// Archivos estaticos
app.use(express.static('public'))


// Listen method to server connection
app.listen(PORT, () => {
    console.log("✔✔✔ https://localhost: " + PORT)
})