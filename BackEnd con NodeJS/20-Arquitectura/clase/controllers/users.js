const users = require("../models/users");

function userAdd(firstname, lastname, email){
    users.add(firstname, lastname, email);
}

function userShow(){
    return users.all();
}

module.exports.userAdd = userAdd
module.exports.userShow = userShow