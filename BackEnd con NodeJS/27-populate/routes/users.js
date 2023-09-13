//agregar middlewares de validación de usarios
//estás rutas son solo para administradores

const express = require('express');
const router = express.Router();
const usersController = require("../controllers/users.js")

router.get('/', usersController.get)
router.get('/:id', usersController.get)
router.post('/', usersController.add)
router.post('/buyProduct', usersController.buyProduct)

module.exports = router;