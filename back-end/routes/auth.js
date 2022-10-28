const express = require ("express");
const router=express.Router();
const {registrarUser} = require("../controlador/authController");


router.route('/usuario/registro').post(registrarUser)

module.exports= router
