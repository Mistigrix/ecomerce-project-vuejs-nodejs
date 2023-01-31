const { Product } = require('../models/product');

const getAllProducts = (req, res) => {
        Product.findAll()
        .then((response) => res.status(200).json(response))
        .catch(error => {
            console.error(error)
            res.status(500).json({ errorCode: 500, message: "Server Error"});
        });
}

const getProductsByCategory = (req, res) => {
    Product.findAll({
        where: {
            category: req.params.category
        }
    })
    .then(products_data => res.status(200).json(products_data))
    .catch(error => {
        console.error(error)
        res.status(500).json({ errorCode: 500, message: "Server Error"})
    });
}

const createProduct = (req, res) => {
    Product.create({ ...req.body })
    .then(() => res.status(201).send("The product as been created"))
    .catch(error => {
        console.error(error.message);
        res.status(500).json({ errorCode: 500, message: "Server Error"});
    })
}

const getOneProduct = (req, res) => {
    Product.findAll({
        where: {
            product_name: req.params.product_name
        }
    })
    .then(products_data => res.status(200).json(products_data))
    .catch(error => {
        console.error(error)
        res.status(500).json({ errorCode: 500, message: "Server Error"})
    });
}

module.exports = {
    getAllProducts,
    getProductsByCategory,
    createProduct,
    getOneProduct,
};
