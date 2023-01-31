const express = require('express');
const app = express();
const productRouter = require('./routes/product');

// app.set('port', 3000)

class Product {
    constructor(name, price, category, image) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.image = image;
    }
}

const product_data = [
    {
        "id": 1,
        "price": 5,
        "name": "Telecommande",
        "category": "New arrivals",
        "image": "https://s.alicdn.com/@sc04/kf/H2745f23e22a9428b86b703a326ea1c22s.png_120x120.jpg"
        
    },
    {
        "id": 2,
        "price": 15,
        "name": "Montre",
        "category": "Top-Ranking",
        "image": "https://s.alicdn.com/@sc04/kf/H2745f23e22a9428b86b703a326ea1c22s.png_120x120.jpg"
        
    },
    {
        "id": 3,
        "price": 2,
        "name": "Telephone",
        "category": "Top-Ranking",
        "image": "https://s.alicdn.com/@sc04/kf/H2745f23e22a9428b86b703a326ea1c22s.png_120x120.jpg"
        
    },
    {
        "id": 4,
        "price": 54,
        "name": "Sac à main",
        "category": "New arrivals",
        "image": "https://s.alicdn.com/@sc04/kf/H2745f23e22a9428b86b703a326ea1c22s.png_120x120.jpg"
        
    },
]

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Content, Accept, Authorization, X-Requested-');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS')
    next();
})

app.use('/api/products', productRouter);

module.exports = app;
