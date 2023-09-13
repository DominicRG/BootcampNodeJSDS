const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: {
    type: Number,
    validate: {
      validator: function(value) {
        console.log(value)
        return value >= 0;
      },
      message: 'El stock debe ser un número positivo.',
    },
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', // Hace referencia al modelo de categorías
  },
}, {timestamps: true});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;