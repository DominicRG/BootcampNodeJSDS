//Recibiendo numeros por consola
let num1 = parseInt(process.argv[2], 10);
let num2 = parseInt(process.argv[3], 10);
let num3 = parseInt(process.argv[4], 10);

let arrayNum = [num1, num2, num3];

//Numero al azar entre 1 y 10 
let aleat = Math.round(Math.random()*10);

//Creando la promesa
const coincide = new Promise((resolve, reject) => {
    const indiceCoincidencia = arrayNum.indexOf(aleat);

    if (indiceCoincidencia !== -1) {
        resolve(`Ganaste, el número era ${aleat} y se encontraba en la ${indiceCoincidencia} posición`);
    }else{
        let numMasCercano;

        let arrayClaveValor = arrayNum.map((valor) => ({ numero: valor, absoluto: "" }));
        arrayClaveValor.forEach(obj => {
            const numero = obj.numero;
            obj.absoluto = Math.abs(aleat - numero);
        })
        //Asigno el primer absoluto del array a la variable menor
        let menor = arrayClaveValor[0].absoluto;

        arrayClaveValor.forEach((obj) => {
            const absoluto = obj.absoluto;
            if (menor > absoluto) {
                menor = absoluto;
            }
        });

        arrayClaveValor.forEach((obj) => {
            const absoluto = obj.absoluto;
            if ((menor == absoluto)) {
                numMasCercano = obj.numero;
            }
        });

        reject(`Perdiste, el número era ${aleat} y tu número más cercano fue el ${numMasCercano}`);
    }
})

//Uso de la promesa
coincide.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

console.log("El numAleat: " + aleat);