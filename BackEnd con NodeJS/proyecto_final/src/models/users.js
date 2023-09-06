const mongoose = require('../config/mongo')
const ObjectId = mongoose.Types.ObjectId;

const usersSchema = new mongoose.Schema({
  firstname: {type: String, required: true, lowercase: true},
  lastname: {type: String, lowercase: true},
  email: String,
  age: Number
});

const Users = mongoose.model('Users', usersSchema);

async function add(data) {
  try {
    const newUser = new Users(data);
    newUser.save();
    return newUser;  
  } catch (error) {
    console.error(error);
  }
}

async function all() {
  return await Users.find({});  
}

async function get(id){
  try {
    let user = await Users.findById(id).exec();
    return user; 
  } catch (error) {
    console.log(error);
  }
}

async function update(id, data) {
  try {
    return await Users.findByIdAndUpdate(new ObjectId(id), data)
  } catch (error) {
    throw error
  }
}

async function del(id) {
  try {
    return await Users.findByIdAndRemove(new ObjectId(id))
  } catch (error) {
    throw error
  }
}


module.exports = {add, all, get, update, del};
