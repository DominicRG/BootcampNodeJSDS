
for (let index = 2; index < 10; index++) {
    console.log("==================");
    console.log(`tabla del ${index}`);
    console.log("==================");
    for (let j = 0; j < 13; j++) {
        console.log(`${index} * ${j} = ${index*j}`);
    }
}

let condicion = true;
while (condicion) {
    console.log(condicion);
    condicion = false;
    console.log(condicion);
}

do{
    condicion = false;
    console.log(condicion);
}while(condicion);