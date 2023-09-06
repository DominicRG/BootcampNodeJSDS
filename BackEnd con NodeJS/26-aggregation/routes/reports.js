//agregar middlewares de validación de usarios
//estás rutas son solo para administradores

const express = require('express');
const router = express.Router();
const reportsController = require("../controllers/reports.js")

router.get('/', reportsController.get)

module.exports = router;