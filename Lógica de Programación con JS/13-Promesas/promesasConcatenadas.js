const promesa = new Promise((resolve, reject) => {
    resolve("Primera promesa resuelta");
})

promesa
.then((respuesta) => {
    console.log("Primer then");
    return `${respuesta}: A`;
})
.then((respuesta) => {
    console.log("Segundo then");
    return `${respuesta}: B`;
})
.then((respuesta) => {
    console.log("Tercer then");
    console.log(respuesta);
});