require('dotenv').config();

/* const users = require('./controllers/users');

users.userAdd('DANIEL', 'SEGOVIA', 'dani@test.com');

console.log(users.userShow());

console.log(process.env.PORT);
*/
const express = require('express');
const app = express();
app.use(express.json());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(process.env.PORT, function(){
    console.log("prendio");
});