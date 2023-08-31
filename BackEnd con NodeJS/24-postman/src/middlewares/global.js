const logger = (req, res, next) => {
    console.log('Paso siempre por aquí');
    next();
};

module.exports = logger