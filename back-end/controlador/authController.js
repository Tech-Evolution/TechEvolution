const User = require("../Models/auth")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

exports.registrarUser = catchAsyncErrors(async (req, res, next) => {
    const { nombre, email, password } = req.body;

    const user = await User.create({
        nombre,
        password,
        email,
        avatar: {
            public_id: "qwertyuikjhgf34",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5qWv8yaPOA8Brc8HY00a8hXHt-udCq0n2g&usqp=CAU"
        }
    })

    res.status(201).json({
        success:true,
        user
    })
})