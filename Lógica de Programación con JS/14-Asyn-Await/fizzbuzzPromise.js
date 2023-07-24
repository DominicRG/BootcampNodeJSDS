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

for (let i = 1; i < 101; i++) {
    promesas.push(fizzbuzz(i));
}

Promise.allSettled(promesas)
    .then(results => {
        results.forEach(result => {
            if(result.status === "fulfilled"){
                console.log(result.value);
            } else{
                console.error(result.reason);
            }
        });
    });