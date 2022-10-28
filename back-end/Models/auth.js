const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")

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
        default: 'user'
    },

    fechaRegistro: {
        type: Date,
        default: Date.now
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

module.exports = mongoose.model("auth", userSchema)