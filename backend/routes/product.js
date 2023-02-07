const express = require('express');
const ProductController = require('../controllers/product.js');

const router = express.Router();

router.use(express.json()) // authorization routes for json request

router.get('/', ProductController.getAllProducts);

router.get('/category/:category', ProductController.getProductsByCategory)

router.get('/:product_name', ProductController.getOneProduct)

router.get('/categories/getAll', ProductController.getAllCategories);

router.get('/categories/getAllName', ProductController.getAllCategoriesInList);

module.exports = router;
