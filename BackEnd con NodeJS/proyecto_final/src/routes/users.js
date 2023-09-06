const express = require('express');
const router = express.Router();
const usersController = require("../controllers/users")
const userMiddleware = require("../middlewares/users")

router.use(userMiddleware.userLogger)

router.get('/:id', userMiddleware.hasId, async function (req, res) {
    const id = req.params.id
    const user = await usersController.get(id);
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

router.put('/:id', userMiddleware.hasId, async function (req, res) {
    try {
        const id = req.params.id
        const users = await usersController.userUpdate(id, req.body)

        res.status(200).json({
            mensaje: `el usuario ha sido actualizado`
        })    
    } catch (error) {
        res.status(404).json({
            mensaje: error
        }) 
    }
})

router.delete('/:id', userMiddleware.hasId, async function (req, res) {
    try {
        const id = req.params.id
        const users = await usersController.userDelete(id)
        

        res.status(200).json({
            mensaje: `el usuario ha sido eliminado`
        })
    } catch (error) {
        res.status(404).json({
            mensaje: error
        })

    }
})


module.exports = router;