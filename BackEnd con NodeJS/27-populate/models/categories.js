const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
}, {timestamps: true});

categorySchema.set('toJSON', {
  transform: function (doc, ret) {
    // Excluir los campos created_at y updated_at del resultado JSON
    delete ret.createdAt;
    delete ret.updatedAt;
    delete ret.__v;
  }
});

const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;