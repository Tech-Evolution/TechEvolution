import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    let token = req.headers.authorization; 

    if(token){
        token = token.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, user) =>{
            if(err)  res.status(403).json('token no válido!');

            req.user = user;
            next();
        })
    } else {
        return res.status(401).json('Usted no está autenticado!')
    }
}

export const tokenRequire = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params._id || req.user.isAdmin){
            next();
        }else{
            return res.status(403).json('Usted no está autorizado para realizar esta acción!')
        }
    })
}

export const adminTokenRequire = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin){
            next();
        }else{
            return res.status(403).json('Usted no está autorizado para realizar esta acción!')
        }
    })
}