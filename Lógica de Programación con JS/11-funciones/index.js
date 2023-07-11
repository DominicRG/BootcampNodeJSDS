function hola(){
    console.log("hola mundo");
}

// const chau = () => {
//     console.log("chau");
// }

//diferencia entre functions y arrow functions con el this
// const a = {
//     nombre : "dani",
//     mostrarNombre : function(){
//         console.log(this);
//         console.log("mi nombre es: " + this.nombre)
//     },

//     mostrarNombre2 : () => {
//         console.log(this);
//         console.log("mi nombre es: " + this.nombre)
//     }
// }

// a.mostrarNombre()
// a.mostrarNombre2()

function hola(a,b,c){
    console.log("=============HOLA===============")
    console.log(arguments)
    console.log("================================")
}

const chau = (a,b,c) => {
    console.log("=============CHAU===============")
    console.log(arguments)
    console.log("================================")
}

hola(1,3,5)
chau(2,4,6)