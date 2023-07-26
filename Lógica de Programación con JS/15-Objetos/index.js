let persona = {
    nombre: "Dani",
    apellido: "Sego",
    fullname: function(){
        return `${this.nombre} ${this.apellido}`
    },
    direcciones: [
        {direccion: "algo 123"},
        {direccion: "otro algo"}
    ]
}

const personaText = JSON.stringify(persona);
console.log(personaText)

const personaX = JSON.parse(personaText);
console.log(personaX)