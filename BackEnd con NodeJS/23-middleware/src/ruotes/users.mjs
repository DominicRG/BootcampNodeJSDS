import express from 'express';
const router = express.Router();
import userMiddleware from '../middleware/users.mjs'

router.use(userMiddleware.userLogger)

router.get('/', function (req, res) {
    res.status(200).json({
        mensaje: "hola mundo"
    })
})

router.get('/todo', function (req, res) {
    res.status(200).json({
        mensaje: "hola mundo"
    })
})

router.post('/', userMiddleware.validations, function (req, res) {
    res.status(201).json({
        mensaje: "hola mundo"
    })
})

export default router;