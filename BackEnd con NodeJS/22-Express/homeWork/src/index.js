require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());

const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

app.listen(process.env.PORT, function(){
    console.log(`app encendida en el puerto ${process.env.PORT}`);
});