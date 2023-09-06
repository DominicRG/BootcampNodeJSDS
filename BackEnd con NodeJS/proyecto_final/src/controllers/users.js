const usersModel = require('../models/users');

async function userAdd(data) {
  try {
    console.log("EN EL CONTROLLADOR")
    console.log(data)
    let dataC  = await usersModel.add(data);  
    return dataC
  } catch (error) {
    console.error(error);
  }
}

async function userShow() {
  let users = await usersModel.all();
  return users;
}

async function get(id){
  try {
    let user = await usersModel.get(id);
    return user;
  } catch (error) {
    console.error(error);
  }
}

async function userUpdate(id, data) {
  return await usersModel.update(id, data)
}

async function userDelete(id) {
  return await usersModel.del(id)
}

module.exports = {userAdd, userShow, get, userUpdate, userDelete};
