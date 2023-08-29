const logger = (req, res, next) => {
    console.log('Paso siempre por aqui')
    //res.send("no sigo");
    next();
}

module.exports = logger;