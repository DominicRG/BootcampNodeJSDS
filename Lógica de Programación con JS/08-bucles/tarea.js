console.clear();

let numero = process.argv[2];
var contador = 0;
var inicioBucl = 0;
var topeMax = 0;

let x = Math.abs(numero);
inicioBucl  = x-100;
topeMax = x+100;

for (inicioBucl; inicioBucl < topeMax; inicioBucl++) {
    contador++;
    if(inicioBucl == numero){
        console.log(`el número era ${inicioBucl}`);
        console.log(`lo encontré en ${contador} vueltas`);
        break;
    }    
}

// if(numero < 5000){
//     inicioBucl = 0;
//     topeMax = 5000;
// }
// if(numero > 5000){
//     inicioBucl = 5000;
//     topeMax = 10000;
// }

// console.log({numero});
// console.log({inicioBucl});
// console.log({topeMax});
// console.log({contador});

// for (inicioBucl; inicioBucl < topeMax; inicioBucl++) {
//     contador++;
//     if(inicioBucl == numero){
//         console.log(`el número era ${inicioBucl}`);
//         console.log(`lo encontré en ${contador} vueltas`);
//         break;
//     }
// }
console.log({contador});


