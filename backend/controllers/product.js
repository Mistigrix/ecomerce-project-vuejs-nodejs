const { Product, Category } = require('../models/product');

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


const getAllCategories = (req, res) => {
    Category.findAll()
    .then((response) => res.status(200).json(response))
    .catch(error => {
        console.error(error)
        res.status(500).json({ errorCode: 500, message: "Server Error"});
    });
}

const getAllName = (req, res) => {
    let category_name_list = [];
    Category.findAll({
        attributes: ['category_name']
    })
    .then((response) => {
        response.forEach(category => {
            category_name_list.push(category.dataValues.category_name);
        })
        console.log(category_name_list);
        res.status(200).json(category_name_list)
    })
    .catch(error => {
        console.error(error)
        res.status(500).json({ errorCode: 500, message: "Server Error"});
    });
    
}

const createCategory = (req, res) => {
    Category.create({
        ...req.body
    })
    .then(category => res.status(200).send("Categorie creer"))
    .catch(error => {
        console.error(error)
        res.status(500).json({message: "Server Error"})
    });
}

module.exports = {
    getAllProducts,
    getProductsByCategory,
    createProduct,
    getOneProduct,
    getAllCategories,
    getAllCategoriesInList: getAllName,
    createCategory,
};
