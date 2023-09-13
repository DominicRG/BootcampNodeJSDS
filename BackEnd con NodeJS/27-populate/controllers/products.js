const ProductModel = require('../models/products');
const CategoryModel = require('../models/categories');



const get = async (req, res) => {
  try {
    const {id} = req.params
    const filter = (id)? {_id: id} : { }
    const products = await ProductModel.find(filter).populate('category');
    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
};

const add = async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body);
    newProduct.save();
    return res.status(201).json({ product: newProduct });  
  } catch (error) {
    
  }
};

module.exports = {add, get}
