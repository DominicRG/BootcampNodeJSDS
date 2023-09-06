require('dotenv').config();
const express = require('express')
const app = express()
app.use(express.json())

const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

const reportsRouter = require('./routes/reports');
app.use('/reports', reportsRouter);


app.listen(process.env.PORT, function(){
    console.log(`app connected on ${process.env.PORT} port`)
})