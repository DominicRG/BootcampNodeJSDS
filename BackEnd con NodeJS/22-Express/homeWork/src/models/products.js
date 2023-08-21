require('dotenv').config();

const fs = require('fs');
const archiveTxt = process.env.ARCHIVETXT;

let products = [];

try {
    const data = fs.readFileSync(archiveTxt, 'utf8');
    products = Array.isArray(JSON.parse(data)) ? JSON.parse(data) : [];
} catch (error) {
    console.log('.txt file not found');
}

function getAll() {
    return products;
}

function findByName(name) {
    const foundproducts = products.filter((element) => {
        if (element.name) {
            const nameElement = element.name.toLowerCase();
            const searchName = name.toLowerCase();
            return nameElement.includes(searchName);
        }
        return false;
    });

    return foundproducts;
}

function add(product) {
    products.push({
        id: product.id,
        name: product.name,
        description: product.description,
        measures: product.measures,
        weight: product.weight
    })

    fs.writeFileSync(archiveTxt, JSON.stringify(products));
}

function update(indice, product) {
    products[indice] = product;
    
    fs.writeFileSync(archiveTxt, JSON.stringify(products));
}

function remove(indice) {
    products.splice(indice, 1);

    fs.writeFileSync(archiveTxt, JSON.stringify(products));
}

module.exports.getAll = getAll;
module.exports.findByName = findByName;
module.exports.add = add;
module.exports.update = update;
module.exports.remove = remove;