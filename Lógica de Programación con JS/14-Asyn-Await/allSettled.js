console.log("Arranco");
const randomNumber = (from=1, to=1000) => Math.floor(Math.random() * (to - from + 1)) + from;
let contador = 0;

const generadorDePromesas = (demora, number) => new Promise((resolve, reject) => {
    contador++
    console.log(`Inicio Promesa ${contador}`)
    setTimeout(() => {
        
        if(number % 2 === 0){
            resolve(`Promesa: El número ${number} es par y demoré ${demora}ms`)
        } else {
            reject(`Promesa: BAD NEWS El número ${number} es impar y demoré ${demora}ms`)
        }
    }, demora);
    
})

const promesas = []

promesas.push(generadorDePromesas(randomNumber(), randomNumber()))
promesas.push(generadorDePromesas(randomNumber(), randomNumber()))
promesas.push(generadorDePromesas(randomNumber(), randomNumber()))
promesas.push(generadorDePromesas(randomNumber(), randomNumber()))


Promise.allSettled(promesas).
  then((results) => results.forEach((result) => console.log(result)));
