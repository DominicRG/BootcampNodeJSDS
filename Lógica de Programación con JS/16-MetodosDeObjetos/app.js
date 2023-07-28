/* const person = {
  name: 'John',
  age: 30,
  profession: 'Developer'
};

const pares = Object.entries(person);
for (const [key, value] of pares) {
  console.log(`${key}: ${value}`);
}

console.log(pares) */

// Función regular
function saludar() {
  console.log(`Hola, ${this.nombre}!`);
}

/* // Compartir el valor de this con una función regular
const persona2 = {
  nombre: 'Ana',
  saludar: function() {
    saludar.call(this);
  }
};

persona2.saludar(); // Salida: Hola, Ana!

// Función de flecha
const despedirse = () => {
  console.log(`¡Adiós, ${this.nombre}!`);
};

// Compartir el valor de this con una función de flecha
const persona3 = {
  nombre: 'Pedro',
  despedirse: function() {
    despedirse.call(this);
  }
};

persona3.despedirse(); // Salida: ¡Adiós, undefined! */