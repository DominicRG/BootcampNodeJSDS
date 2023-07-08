let pedido = process.argv[2];
let cantidad = pedido/20;
let galletitas = 0;

let parteEntera = Math.trunc(cantidad);
//let parteDecimal = Math.round((cantidad - parteEntera)*10);
let modulo =  pedido % 20;

console.log("Pedido entrante: "+ pedido+"\n");
cocinandoGalletas(parteEntera, modulo);
console.log("\nPedido enviado: "+ galletitas);


function cocinandoGalletas(parteEntera, modulo){
    for (let j = 0; j < parteEntera; j++) {
        for (let i = 0; i < 20; i++) {
            galletitas += 1;
        }
        console.log("Tanda de 20: Se va cocinando: "+galletitas);
    }
    
    if(modulo>0){
        for (let i = 0; i < modulo; i++) {
            galletitas += 1;
        }
        console.log("Tanda de "+modulo+": Se va cocinando: "+galletitas);
    }
}


/*Codigo para tandas de 10Galletas
function tanda10(){
    for (let index = 0; index < 10; index++) {
        galletitas++;
    }
}

for (let index = 0; index < parteEntera; index++) {
    tanda10();
    console.log("Van "+galletitas+" galletitas.")
}

if(parteDecimal>0){
    for (let index = 0; index < parteDecimal; index++) {
        galletitas++;
    }
    console.log("Van "+galletitas+" galletitas.")
}

console.log("PEDIDO CULMINADO!");*/



// console.log("Galletas :"+ galletitas);
// console.log("Cantidad: "+ cantidad);
// console.log("Parte entera: "+ parteEntera);
// console.log("Modulo: "+modulo);
// console.log("Parte decimal: "+ parteDecimal);