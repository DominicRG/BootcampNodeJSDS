const userModel = require('../models/users');
const productModel = require('../models/products');


const get = async (req, res) => {
  try {
    const {id} = req.params
    const filter = (id)? {_id: id} : { }
    const users = await userModel.find(filter);
    if(users.length === 0){
      throw new Error("usuario/s no encontrado")
    }
    return res.status(200).json({ msj: "todos los users", users: (users.length > 1)? users : users[0] });  
  } catch (error) {
    return res.status(500).json({msj: "error inesperado"})
  }
};

const add = async (req, res) => {
  try {
    const newUser = new userModel(req.body)
    newUser.save()
    return res.status(201).json({ user: newUser });  
  } catch (error) {
    return res.status(500).json({msj: "error inesperado"})
  }
};

const buyProduct = async (req, res) => {

  try {

    const {user_id, product_id, quantity} = req.body
    
    const user = await userModel.findOne({_id: user_id});
    if(!user){
      throw new Error("usuario unexistente")
    }
    
    const product = await productModel.findOne({_id: product_id});
    if(!product){
      throw new Error("producto unexistente")
    }
    
    const amount = product.price * quantity
    
    if(amount > user.money){
      throw new Error ("El usuario no cuenta con el dinero suficiente")
    }

    /* if(quantity > product.stock ){
      throw new Error ("No hay stock disponible")
    } */

    await userModel.updateOne(
      {_id: {_id: user_id}},
      { 
        $inc: { money: amount * -1 },
        $push: { history: {
            productId: product._id,
            productName: product.name,
            productPrice: product.price,
            quantity: quantity,
          } 
        }
      }
    )

    await productModel.updateOne(
      {_id: {_id: product_id}},
      { $inc: { stock: quantity*-1 }}
    )


    return res.status(200).json({msj: "la compra ha sido exitosa"});
  } catch (error) {
    return res.status(500).json({msj: error.message})
  }
};



module.exports = {add, get, buyProduct}
