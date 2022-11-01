import { validationResult, body } from "express-validator"

const validationResultExpress = (req, res, next) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    next()
}

// Function to validate user registration 
export const RegisterValidator = [
    [
        body('username', 'El nombre de usuario debe contener al menos 6 caracteres').trim().isLength({min: 6}),
        body('email', "El formato no es correcto").trim().isEmail().normalizeEmail(),
        body('password', "La contraseña debe contener mínimo 8 caracteres").trim().isLength({min: 8}).
        custom((value, {req}) => {
            if (value !== req.body.passwordConfirm){
                throw new Error('Las contraseñas no coinciden')
            }
            return value
        })
    ], 
    validationResultExpress,
]

export const loginValidator = [
    body('email', "El formato no es correcto").trim().isEmail().normalizeEmail(),
    body('password', "La contraseña debe contener mínimo 8 caracteres").trim().isLength({min: 8}),
    validationResultExpress
]