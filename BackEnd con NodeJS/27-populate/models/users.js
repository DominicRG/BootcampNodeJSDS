const mongoose = require('../config/mongo')
const ObjectId = mongoose.Schema.ObjectId

const usersSchema = new mongoose.Schema({
  name: String,
  money: Number,
  history: [{
    productId: ObjectId,
    productName: String,
    productPrice: Number,
    quantity: Number,
    created_at: { type: Date, default: Date.now }
  }]
}, {timestamps: true});


usersSchema.pre('save', function (next) {
  console.log("hago algo antes de salvar un nuevo usuario usuarios")
  next();
});

usersSchema.post('save', function (doc, next) {
  console.log(`Se ha guardado un nuevo usuario: ${doc}`);
  next();
});
const UserModel = mongoose.model('users', usersSchema);

module.exports = UserModel;