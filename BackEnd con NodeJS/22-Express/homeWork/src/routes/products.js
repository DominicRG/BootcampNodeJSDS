const express = require('express');
const router = express.Router();

const products = require('../controllers/products');

router.get('/', function getAll(req, res) {

  let getProducts = products.getAll();

  res.status(200).json({
    products: getProducts
  });

});

router.get('/:nombre', function findByName(req, res) {
    const name = req.params.nombre;

    const foundproducts = products.findByName(name);

    if(foundproducts.length > 0){
        return res.status(200).json({
            products: foundproducts
        })
    } else {
        res.status(404).send('No item with that name was found.');
    }

});

router.post('/', function add(req, res) {

  let product = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    measures: req.body.measures,
    weight: req.body.weight
  }

  products.add(product);

  res.status(201).json({
    mensaje : "ingreso el producto: " + req.body.name
  });

});

router.put('/:indice', function update(req, res) {

  const indice = req.params.indice;

  let product = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    measures: req.body.measures,
    weight: req.body.weight
  }

  products.update(indice, product);

  res.status(200).json({
    mensaje : "actualizamos el producto: " + indice
  });

});

router.delete('/:indice', function remove(req, res) {
  //res.send('te devuelvo todos los users');
  const indice = req.params.indice;
  products.remove(indice);

  res.status(200).json({
    mensaje : "elimine el producto: " + indice
  });
});



module.exports = router;