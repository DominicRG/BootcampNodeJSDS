const mongoose = require('../config/mongo')
const ObjectId = mongoose.Types.ObjectId;

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  variant: [{
    name: String,
    stock: Number
  }]
});



const Product = mongoose.model('Products', productSchema);

async function add(data) {
  try {
    const newProduct = new Product(data);
    console.log(data)
    newProduct.save();
    return newProduct
  } catch (error) {
    throw (`imposible insertar: ${error}`)
  }
}

async function get(id) {
  try {
    const filter = (id)? new ObjectId(id) : { }
    const products = await Product.find(filter);
    
    return products
  } catch (error) {
    throw (`imposible retornar ${error}`)
  }
}

async function del(id) {
  
  try {
    const products = await Product.findByIdAndRemove(id)
    return true
  } catch (error) {
    throw (`imposible retornar ${error}`)
  }
}

async function reports() {
  try {
    let data = []

    data.push("--- sumo totales de stock por producto ---")
    data.push(await Product.aggregate([
      {
        $unwind: "$variant"
      },
      {
        $group: {
          _id: "$_id",
          name: { $first: "$name" },
          stock: { $sum: "$variant.stock" }
        }
      }
    ]));

    

    data.push("--- Busco productos por nombre ---")
    data.push(await Product.aggregate([
      { $match: { name: /^F/ } }
    ]));

    data.push("--- Productos con precio mayor a 500 ---")
    data.push(await Product.aggregate([
      { $match: { price: { $gte: 500 } } }
    ]));


    data.push('--- CUENTO TODOS LOS PRODUCTOS ----')
    data.push(await Product.aggregate([
      {
        $group: {
          _id: null,
          count: { $sum: 1 }
        }
      }
    ]));


    

    data.push('--- CUENTO TODOS LOS PRODUCTOS DE PRECIO MAYOR A 500----')
    data.push(await Product.aggregate([
      { 
        $match: { 
          price: { $gte: 500 } 
        } 
      },
      {
        $group: {
          _id: null,
          productos_precio_500: { $sum: 1 }
        }
      }
      
    ]));

    data.push('--- PRECIO TOTAL DE TODOS LOS PRODUCTOS----')
    data.push(await Product.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$price" }
        }
      }
      
    ]));

    data.push('--- PRECIO PROMEDIO DE TODOS LOS PRODUCTOS----')
    data.push(await Product.aggregate([
      {
        $group: {
          _id: null,
          predio_promedio: { $avg: "$price" }
        }
      }
      
    ]));

    data.push('--- SUMA TOTAL DE STOCK POR PRODUCTO----')
    data.push('--- CADA VARIANTE TIENE SU STOCK ----')
    data.push(await Product.aggregate([
      {
        $unwind: "$variant"
      },
      {
        $group: {
          _id: "$_id",
          variantsName: { $push: "$variant.name" },
          totalStock: { $sum: "$variant.stock" }
        }
      }
    ]))


    return data
  } catch (error) {
    throw (`imposible retornar ${error}`)
  }
}

module.exports = {add, get, del, reports}
