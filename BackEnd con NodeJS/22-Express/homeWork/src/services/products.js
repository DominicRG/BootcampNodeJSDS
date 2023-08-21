const products = require('../models/products');

function getAll() {
    return products.getAll();
}

function findByName(name) {
    return products.findByName(name);
}

function add(product) {
    products.add(product);
}

function update(indice, product) {
    products.update(indice, product);
}

function remove(indice) {
    products.remove(indice);
}

module.exports.getAll = getAll;
module.exports.findByName = findByName;
module.exports.add = add;
module.exports.update = update;
module.exports.remove = remove;