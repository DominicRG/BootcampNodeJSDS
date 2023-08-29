const userLogger = (req, res, next) => {
    console.log('Todo lo que pase por users pasara por aqui')
    next();
}

const hasId = (req, res, next) => {

    const id = parseInt(req.params.indice)

    if(Number.isNaN(id)){
        console.log(`El dato enviado no es un número ${id}`)
        return res.status(404).json({msj: "no enviaste id"});
    }
    
    console.log('verifique id')
    console.log(parseInt(req.params.indice))
    next();
}

const add = (req, res, next) => {

    const {firstname, lastname, email} = req.body

    if(!firstname || !lastname || !email){
        console.log(`No enviaste toda la data (${req.body})`)
        return res.status(400   ).json({msj: "no enviaste toda la data necesaria para agregar un usuario"});
    }
    
    console.log('verifique data')
    next(); 
}
    
module.exports = {userLogger, hasId, add};