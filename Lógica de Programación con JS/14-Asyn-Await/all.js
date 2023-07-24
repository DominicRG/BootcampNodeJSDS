console.log("Arranco");
const randomNumber = (from=1, to=1000) => Math.floor(Math.random() * (to - from + 1)) + from;

let contador = 0
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

const promesa1 = generadorDePromesas(randomNumber(), randomNumber())
const promesa2 = generadorDePromesas(randomNumber(), randomNumber())
const promesa3 = generadorDePromesas(randomNumber(), randomNumber())


Promise.all([promesa1, promesa2, promesa3]).then(values => {
    console.log(values);
  }, error => {
    console.log(error)
  });
