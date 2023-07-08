let array = [1, 4, 2, 5, -2, 3];
console.log(array);
let limite =  array.length;
let cont = 0;

for(let i = 0; i < array.length - 1; i++){
    for (let index = 0; index < limite - 1; index++) {
        console.log({index})
        const actual = array[index];
        const siguiente = array[index + 1];
        if(siguiente < actual){
            array[index] = siguiente;
            array[index + 1] = actual;
        }
        cont++;
    }
    limite--;
    console.log({i})
}

console.log(array);
console.log(cont);