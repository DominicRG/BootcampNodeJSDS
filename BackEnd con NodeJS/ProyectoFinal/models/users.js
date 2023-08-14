const fs = require('fs');

let users = []

try {
    const data = fs.readFileSync('./users.txt', 'utf8');
    users = Array.isArray(JSON.parse(data)) ? JSON.parse(data) : [] ;    
} catch (error) {
    console.log(error);
}

function add(firstname, lastname, email){
    users.push({
        firstaname: firstname,
        lastname: lastname,
        email: email
    })

    fs.writeFileSync("./users.txt", JSON.stringify(users));
}

function all(){
    return users;
}

module.exports.add = add
module.exports.all = all