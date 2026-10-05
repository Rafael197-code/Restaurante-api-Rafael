const jwt = require("jsonwebtoken")

function  auth(req,res,next){

    const authHeader = req.headers.authorization
    
    if(!authHeader){
        return res.status(401).json({
            mensagem:"token nao informado"
        })
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(
            token,process.envJWT_SECRET
        )
        req.usuario = decodednext()
        next()

    } catch (error){
        console.log(error)

        return res.status(401).json({
            mensagem:"Token inválido"
        })
    }
}

module.exports = auth