const express = require('express');
const router = express.Router();
const userMiddleware = require('../middlewares/users')

router.use(userMiddleware.userLogger);

const users = [];

router.get('/', function (req, res) {
  //res.send('te devuelvo todos los users');
  res.status(200).json({
    mensaje : "te devuelvo todos los users",
    users: users
  });
});

router.post('/', userMiddleware.add, function (req, res) {
  //aca van las validaciones
  users.push(req.body);

  res.status(201).json({
    mensaje : "ingreso el usuario: " + req.body.firstname,
    user: req.body
  });
});

router.put('/:indice', userMiddleware.hasId, function (req, res) {
  //res.send('te devuelvo todos los users');
  const indice = req.params.indice;
  users[indice] = req.body;

  res.status(200).json({
    mensaje : "actualizamos el usuario: " + indice,
    infoAdicional: "+++"
  });
});

router.delete('/:indice', userMiddleware.hasId, function (req, res) {
  //res.send('te devuelvo todos los users');
  const indice = req.params.indice;
  users.splice(indice, 1);

  res.status(200).json({
    mensaje : "elimine el usuario: " + indice,
    infoAdicional: "+++"
  });
});

module.exports = router;