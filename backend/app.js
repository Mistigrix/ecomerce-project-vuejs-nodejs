const express = require('express');
const app = express();
const productRouter = require('./routes/product');

// app.set('port', 3000)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Content, Accept, Authorization, X-Requested-');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS')
    next();
})

app.use('/api/products', productRouter);

module.exports = app;
