// Object.prototype.algo = function(){
//     return "hola";
// };
// const algo = "dan";

// console.log(algo.algo())

// Object.prototype.fullname = function(){
//     return `${this.nombre} ${this.apellido}`
// }

// const users = {
//     nombre: "Dani",
//     apellido: "Sego",
// }

// const users2 = {
//     nombre: "Dani2",
//     apellido: "Sego2",
// }

// console.log(users.fullname());
// console.log(users2.fullname());

function User(name, age){
        this.name = name,
        this.age = age
}

User.prototype.full = function(){
    return `${this.name} tiene ${this.age} años`
}

const dani = new User("Dani", 18);
const gabi = new User("Gabi", 14);

dani.full = function(){
    return `${this.name} ${this.age}`
}
console.log(gabi.full())
console.log(dani.full())