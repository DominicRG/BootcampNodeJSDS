const express = require('express');
const router = express.Router();

const productMiddlewares = require('../middlewares/products')
const products = require('../controllers/products');

router.use(productMiddlewares.globalErrorHandler);

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

router.post('/', productMiddlewares.verifiedData, function add(req, res) {

  let product = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    measures: req.body.measures,
    weight: req.body.weight
  }

  const found = products.add(product);

  if(found){
    res.status(422).json({error: 'the product already exists'})
  } else {
    res.status(201).json({
      mensaje : "ingreso el producto: " + req.body.name
    });
  }

});

router.put('/:indice', productMiddlewares.verifiedData, productMiddlewares.hasId, productMiddlewares.equalsId, function update(req, res) {

  const indice = req.params.indice;

  let product = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    measures: req.body.measures,
    weight: req.body.weight
  }

  const updateResult = products.update(indice, product);

  if(!updateResult.success){
    res.status(400).json({error: updateResult.error});
  } else{
    res.status(200).json({
      mensaje : "actualizamos el producto: " + indice
    });
  }

});

router.delete('/:indice', productMiddlewares.hasId, function remove(req, res) {
  const indice = req.params.indice;
  const found = products.remove(indice);

  if(found){
    res.status(404).json({error: 'the id does not exist'})
  } else{
    res.status(200).json({
      mensaje : "elimine el producto: " + indice
    });
  }
  
});



module.exports = router;