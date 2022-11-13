const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Ingrese su nombre"],
        maxlength: [200, "Este campo no puede exeder los 200 caracteres"]
    },

    email: {
        type: String,
        required: [true, "Registre el email"],
        unique: true,
        validate: [validator.isEmail, "Por favor ingrese un email valido"]
    },

    password: {
        type: String,
        required: [true, "Ingrese la contraseña"],
        minlength: [8, "Tu contraseña no puede tener menos de 8 caracteres"],
        select: false
    },

    avatar: {
        public_id: {
            type: String,
            required: true
        },

        url: {
            type: String,
            required: true
        }
    },

    rol: {
        type: String,
        default: 'admin'
    },

    fechaRegistro: {
        type: Date,
        default: Date.now
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date
})



//Encriptamos contraseña antes de guardarla
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})


//Decodificados contraseñas y comparamos
userSchema.methods.compararPass = async function (passDada) {
    return await bcrypt.compare(passDada, this.password)
}


//Retornar un JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_TIEMPO_EXPIRATION
    })
}

//Generar un token para reset de contraseña
userSchema.methods.genResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString('hex')

    //Hashear y setear resetToken
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest('hex')

    //Setear fecha de expiracion del token
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000 //el token dura solo 30 min

    return resetToken
}

module.exports = mongoose.model("auth", userSchema)
