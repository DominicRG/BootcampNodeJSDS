let array = [10, 34, 122, 78, 45, 76, 83, 2, 5, 12];
let mayor = 0;

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element > mayor){
        mayor = element;
    }
}

console.log(`El valor mas alto del array es ${mayor}`);