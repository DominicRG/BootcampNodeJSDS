const CategoryModel = require('../models/categories');

const get = async (req, res) => {
  try {
    const {id} = req.params
    const filter = (id)? {_id: id} : { }
    categories = await CategoryModel.find(filter)

    return res.status(200).json({ msj: "todos los categorias", categories: categories });  
  } catch (error) {
    return res.status(500).json({msj: "error inesperado"})
  }
};

const add = async (req, res) => {
  try {
    let category = new CategoryModel(req.body)
    category.save()
    return res.status(201).json({ category });  
  } catch (error) {
    return res.status(500).json({msj: "error inesperado"})
  }
};

module.exports = {add, get}
