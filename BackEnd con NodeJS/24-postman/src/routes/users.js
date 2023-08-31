const express = require('express');
const router = express.Router();
const usersController = require("../controllers/users")
const userMiddleware = require("../middlewares/users")

router.use(userMiddleware.userLogger)

router.get('/:indice', userMiddleware.hasId, function (req, res) {
    const users = usersController.userShow()
    const indice = req.params.indice
    res.status(200).json({
        mensaje: "Te devuelvo todo los users",
        user: users[indice]
    })
})

router.get('/', function (req, res) {
    try {
        res.status(200).json({
            mensaje: "Te devuelvo todo los users",
            users: usersController.userShow()
        })
    } catch (error) {
        res.status(500).json({
            mensaje: "error inesperado"
        })
    }
    
})

router.post('/', userMiddleware.add, function (req, res) {

    try {
        
        const user_id = usersController.userAdd(req.body.firstname, req.body.lastname, req.body.email)

        res.status(201).json({
            mensaje: "El user " + req.body.firstname + " ha sido agregado",
            user: req.body,
            user_id: 7

        })    
    } catch (error) {
        res.status(404).json({
            mensaje: error,
            user: req.body
        })    
    }
    
    
})

router.put('/:indice', userMiddleware.hasId, function (req, res) {
    /* generar métodos en el controlador y modelo para actualizar */
    const users = usersController.userShow()
    const indice = req.params.indice
    users[indice] = req.body

    res.status(200).json({
        mensaje: `${indice} ha sido actualizado`,
        users: users
    })
})

router.delete('/:indice', userMiddleware.hasId, function (req, res) {
    /* generar métodos en el controlador y modelo para eliminar */

    const indice = req.params.indice
    user = users.splice(indice, 1)

    res.status(204).json({
        mensaje: "usuario eliminado",
        users: user
    })
})


module.exports = router;