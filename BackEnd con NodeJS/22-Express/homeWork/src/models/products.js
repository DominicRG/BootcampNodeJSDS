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
    const found = products.some((element) => {
        return element.name === product.name || element.id === product.id;
    })

    if(found){
        return true;
    } else {
        products.push({
            id: product.id,
            name: product.name,
            description: product.description,
            measures: product.measures,
            weight: product.weight
        })
    
        fs.writeFileSync(archiveTxt, JSON.stringify(products));

        return false;
    }
    
}

function update(indice, product) {
    const nameExist = products.some((element) => {
        return element.name === product.name;
    })

    if(nameExist){
        return {success: false, error: 'Name already exists'};
    }

    const indexToUpdate = products.findIndex(element => element.id === indice);

    if(indexToUpdate !== -1){
        products[indexToUpdate] = product;
    
        fs.writeFileSync(archiveTxt, JSON.stringify(products));

        return {success: true};
    } else {
        return {success: false, error: 'ID not found'};
    }

    
}

function remove(indice) {
    const indexToRemove = products.findIndex(element => element.id === indice);

    if(indexToRemove !== -1){
        products.splice(indexToRemove, 1);

        fs.writeFileSync(archiveTxt, JSON.stringify(products));

        return false;
    } else {
        return true;
    }

}

module.exports.getAll = getAll;
module.exports.findByName = findByName;
module.exports.add = add;
module.exports.update = update;
module.exports.remove = remove;