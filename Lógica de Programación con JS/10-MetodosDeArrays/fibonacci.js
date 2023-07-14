let hasta = parseInt(process.argv[2]);
let array = [0, 1];

while (array.length < hasta) {
    array.push(array[array.length - 2] + array[array.length - 1]);
}

console.log(array);
