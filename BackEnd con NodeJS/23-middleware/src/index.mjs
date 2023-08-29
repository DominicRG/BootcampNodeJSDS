import 'dotenv/config'
import express from 'express';
import logger from './middleware/global.mjs'

const app = express();
app.use(express.json())
const port = process.env.PORT || 3000;

app.use(logger)

import usersRouter from './ruotes/users.mjs';
app.use('/users', usersRouter);


app.listen( port ,()=>{
    console.log(`server running on ${port}`)
});
