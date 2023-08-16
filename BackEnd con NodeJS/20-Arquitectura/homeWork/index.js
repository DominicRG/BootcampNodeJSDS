const operations = require("./controllers/operations");

operations.addition(7, 15);
operations.subtraction(30, 10);
operations.multiplication(9, 8);
operations.division(12, 3);

console.log(operations.operationsShow());