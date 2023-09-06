const productModel = require('../models/products');

const get = async (req, res) => {
  try {
    reports = await productModel.reports()
    return res.status(200).json({ msj: "todos los reportes", reports: reports });  
  } catch (error) {
    return res.status(500).json({msj: "error inesperado"})
  }
};

module.exports = {get}
