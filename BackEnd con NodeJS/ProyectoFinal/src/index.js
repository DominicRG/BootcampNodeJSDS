require('dotenv').config();
const users = require('./controllers/users');

users.userAdd('DANIEL', 'SEGOVIA', 'dani@test.com');

console.log(users.userShow());

console.log(process.env.PORT);
