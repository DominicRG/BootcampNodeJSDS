//agregar middlewares de validación

const express = require('express');
const router = express.Router();
const categoriesController = require("../controllers/categories.js")

router.get('/', categoriesController.get)
router.get('/:id', categoriesController.get)
router.post('/', categoriesController.add)

module.exports = router;