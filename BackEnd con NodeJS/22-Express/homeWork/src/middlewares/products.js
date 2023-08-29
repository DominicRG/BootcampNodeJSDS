const Joi = require('joi');

const verifiedData = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.number().required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
        measures: Joi.string().required(),
        weight: Joi.string().required()
    });

    const { error } = schema.validate(req.body);

    if(error){
        return res.status(400).json({
            error: "Validation error",
            message: error.details[0].message
        });
    }

    console.log(`verified data`);
    next();
}

const hasId = (req, res, next) => {
    const schema = Joi.object({
        indice: Joi.number().integer().required()
    })

    const { error } = schema.validate({ indice:  req.params.indice});

    if(error){
        return res.status(400).json({
            error: "Validation error",
            message: error.details[0].message
        });
    }

    console.log('hasId');
    next();
};

const equalsId = (req, res, next) => {
    const idParam = parseInt(req.params.indice);
    const idBody = parseInt(req.body.id);

    if(!(idParam === idBody)){
        return res.status(404).json({error: "id does not match"});
    }

    console.log('equalsId')
    next();
}

// Middleware de manejo de errores globales
const globalErrorHandler = (err, req, res, next) => {
    console.error(err); // Mostrar el error en la consola para fines de depuración

    // Aquí podrías responder al cliente de manera adecuada según el tipo de error
    res.status(500).json({
        error: "Internal Server Error",
        message: "Something went wrong on our end. We're working on it!"
    });
};

module.exports = {verifiedData, hasId, equalsId, globalErrorHandler};