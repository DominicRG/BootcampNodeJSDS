const usersModel = require('../models/users');

function userAdd(firstname, lastname, email) {
  try {
    console.log(firstname, lastname, email)
    usersModel.add(firstname, lastname, email);  
    return true
  } catch (error) {
    
  }
  
}

function userShow() {
  return usersModel.all();
}

module.exports.userAdd = userAdd;
module.exports.userShow = userShow;
