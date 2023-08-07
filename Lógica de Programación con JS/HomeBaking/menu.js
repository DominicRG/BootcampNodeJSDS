/* menus */

function menuUsuario(usuario){
    let opcion = parseInt(
        prompt(`Hola ${usuario}, ¿Qué operación deseas realizar?
        1: Ingresar Dinero
        2: Retirar Dinero
        3: Transferir Dinero
        4: Comprar Divisas
        5: Volver al menú anterior`))

        switch (opcion) {
            case 1:
                ingresarDinero()
                break;
            case 2:
                retirarDinero()
                break;
                
            case 5:
                alert("ok")
                break;    
            default:
                alert("La opción elegida no existe para nada")
                break;
    }
}


function menuAdministracion(){
    let opcion = parseInt(
            prompt(`Hola ¿Qué operación deseas realizar?
            1: Agregar Usuario
            2: Eliminar Usuario
            3: Ver Logs de usuario
            4: Volver al menú anterior`)
        )

        switch (opcion) {
        case 1:
            agregarUsuario()
            break;
        case 2:
            //etc
            break;    
            
        case 4:
            break;    
        default:
            alert("La opción elegida no existe")
            break;
    }
}


/* operaciones */

function ingresarDinero(valor){
    alert("El dinero ha sido agregado")
}

function agregarUsuario(){
    nombre = prompt("Ingrese su nombre")
    apellido = prompt("Ingrese su apellido")
    email = prompt("Ingrese su email")

    alert(`El usuario ${nombre} ha sido agregado correctamente`)
}



function buscarUsuario(callback){
    const usuario = prompt(`Ingrese el ID o Email del usuario a buscar`);
    /* busco mi usuario */
    /* if(!usuario) return "El usuario no existe" */
    callback(usuario)
}










let opcion = true
while(opcion !== 3){

    opcion = parseInt(
        prompt(`Ingrese la opción deseada: 
        1: Operaciones
        2: Administración
        3: Salir`)
    )

    switch (opcion) {
        case 1:
            buscarUsuario(menuUsuario)
            break;
        case 2:
            menuAdministracion()
            break;    
        case 3:
            alert(`Muchas gracias
            Ha sido un placer operar con usted`)
            break;    
        default:
            alert("La opción elegida no existe")
            break;
    }

}
