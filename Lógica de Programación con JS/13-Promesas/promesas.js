console.log("Inicio del programa")

//Creando la promesa
const traerUsuarios = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve([
                {
                    id : 12,
                    nombre: "Dominic",
                    edad: 22
                },
                {
                    id : 13,
                    nombre: "Jimmy",
                    edad: 47
                }
            ]);
        }, 5000)
    } catch (error) {
        reject("Lo siento, no se encontraron usuarios");
    }
});

console.log("Iniciando promesa")

//Uso la promesa
const usuarios = traerUsuarios
    .then((respuesta) => {
        if(respuesta.length > 0){
            //console.log(respuesta)
            return respuesta;
        }
    })
    .catch((error) => {
        console.log(error);
    });

console.log("Fin del proceso")

console.log(usuarios);