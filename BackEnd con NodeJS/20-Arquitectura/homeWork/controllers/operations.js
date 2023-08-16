const operations = require("../models/operations");
const moment = require('moment')

let currentDate = moment().format('YYYY-MM-DD').toString()
let currentTime = moment().format('hh:mm:ss').toString()
let time = currentDate + " - " + currentTime;

function addition(num1, num2){
    let result = num1 + num2
    operations.solve(time, 'addition', result);
}

function subtraction(num1, num2){
    let result = num1 - num2
    operations.solve(time, 'subtraction', result);
}

function multiplication(num1, num2){
    let result = num1 * num2
    operations.solve(time, 'multiplication', result);
}

function division(num1, num2){
    let result = num1 / num2
    operations.solve(time, 'division', result);
}

function operationsShow(){
    return operations.all();
}

module.exports.addition = addition;
module.exports.subtraction = subtraction;
module.exports.multiplication = multiplication;
module.exports.division = division;
module.exports.operationsShow = operationsShow;