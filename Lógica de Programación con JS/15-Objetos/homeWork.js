const randomNumber = (from=1, to=100) => Math.floor(Math.random() * (to - from + 1)) + from;

let arrayObjects = []

for (let i = 0; i < 20; i++) {
    arrayObjects.push(
        {
            nombre : 'Dominic',
            apellido : 'Roman',
            edad : randomNumber()
        }
    )
}

console.log('Antes de filtrar: ');
console.log(arrayObjects);

const arrayAdult = arrayObjects.filter((element) => {
    return element.edad >= 18;
})

console.log('Despues de filtrar: ');
console.log(arrayAdult);