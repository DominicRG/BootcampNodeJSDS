const userLogger = (req, res, next) => {
    console.log('Todo lo que pase por users pasará por aquí');
    next();
};

const hasId = (req, res, next) => {

    const id = parseInt(req.params.indice)
    if(Number.isNaN(id)){
        console.log(`el dato enviado no es un número (${req.params.indice})`)
        return res.status(404).json({msj: "no enviaste id"})
    }
    console.log('middleware hasId');
    
    next();
};

const add = (req, res, next) => {

    const {firstname, lastname, email} = req.body
    if(!firstname || !lastname || !email){
        console.log(`No enviaste toda la data (${req.body})`)
        return res.status(404).json({msj: "no enviaste toda la data necesaria para agregar un usuario"})
    }
    console.log('middleware add user');
    
    next();
};


module.exports = {userLogger, hasId, add}