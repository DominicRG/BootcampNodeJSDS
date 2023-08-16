const fs = require('fs');
let data;
let operations = [];
try {
    data = fs.readFileSync('./operations.txt', 'utf8');
    operations = Array.isArray(JSON.parse(data)) ? JSON.parse(data) : [] ;    
} catch (error) {
    console.error("El archivo no existe, se procedera a crear :)");
    console.error("---------------------------------------------");
}

function solve(time, operat, result){
    try {
        const operation = {
            timestamp: time,
            operations: operat,
            result: result
        }

        operations.push(operation)
        save(JSON.stringify(operations))

    } catch (error) {
        console.log(error)
    }
}

function all(){
    return operations;
}

function save(content){
    try {
        fs.writeFileSync("./operations.txt", content);
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports.solve = solve;
module.exports.all = all;