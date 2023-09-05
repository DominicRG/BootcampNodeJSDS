const express = require('express');
const router = express.Router();
const usersController = require("../controllers/users")
const userMiddleware = require("../middlewares/users")

router.use(userMiddleware.userLogger)

router.get('/:indice', userMiddleware.hasId, async function (req, res) {
    const indice = req.params.indice
    const user = await usersController.get(indice);
    res.status(200).json({
        mensaje: `Te devuelvo el user: ${user.id}`,
        user: user
    })
})

router.get('/', async function (req, res) {
    try {
        let users = await usersController.userShow();
        res.status(200).json({
            mensaje: "Te devuelvo todo los users",
            users: users
        })
    } catch (error) {
        res.status(500).json({
            mensaje: "error inesperado"
        })
    }
    
})

router.post('/', userMiddleware.add, async function (req, res) {

    try {
        
        const data = await usersController.userAdd(req.body)

        res.status(201).json({
            mensaje: "El user " + req.body.firstname + " ha sido agregado",
            user: data
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