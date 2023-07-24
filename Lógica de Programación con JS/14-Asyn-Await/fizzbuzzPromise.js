let entrada = parseInt(process.argv[2], 10);

if (isNaN(entrada)) {
    entrada = 100;
}

const fizzbuzz =  (numero) => new Promise((resolve, reject) => {
    if(numero % 15 == 0){
        resolve("fizzbuzz");
    } else if(numero % 5 == 0){
        resolve("buzz");        
    } else if(numero % 3 == 0){
        resolve("fizz");
    } else{
        reject(numero);
    };
});

let promesas = [];

for (let i = 1; i < entrada; i++) {
    promesas.push(fizzbuzz(i));
}

Promise.allSettled(promesas)
    .then(results => {
        results.forEach(result => {
            result.status === "fulfilled" ? console.log(result.value) : console.error(result.reason);
            // if(result.status === "fulfilled"){
            //     console.log(result.value);
            // } else{
            //     console.error(result.reason);
            // }
        });
    });