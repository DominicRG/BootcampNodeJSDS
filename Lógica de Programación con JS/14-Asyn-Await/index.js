console.log("Arranco");
const randomNumber = (from=1, to=1000) => Math.floor(Math.random() * (to - from + 1)) + from;
let contador = 0;

const generadorDePromesas = (demora, number) => new Promise((resolve, reject) => {
    contador++
    console.log(`Inicio Promesa ${number}`)
    setTimeout(() => {
        
        if(number % 2 === 0){
            resolve(`Promesa: El número ${number} es par y demoré ${demora}ms`)
        } else {
            reject(`Promesa: BAD NEWS El número ${number} es impar y demoré ${demora}ms`)
        }
    }, demora);
    
})



console.log("defino función");

async function ejecucionAsync() {
    try {
        console.log("entro a la función");
        const resultado = await generadorDePromesas(randomNumber(), randomNumber())
        console.log(resultado)
        console.log("termino la función");    
    } catch (error) {
        console.log("voy por el catch");
        console.log(error);
    }
    
    
}
ejecucionAsync()

console.log("finalizo script");
