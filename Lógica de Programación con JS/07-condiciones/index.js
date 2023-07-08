let password = process.argv[2];
let activo = process.argv[3];

console.log(`La edad de la persona es ${edad}`);
console.log(`La persona se encuentra ${activo}`);

if(edad >= 18){
    if(activo){
        console.log("La persona puede ingresar");
    }else{
        console.log("La persona no puede ingresar porque no esta activa");
    }
}else{
    console.log("La persona no es mayor de edad");
}
