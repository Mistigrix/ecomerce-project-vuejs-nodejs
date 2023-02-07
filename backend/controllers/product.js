const connexion = require('../database')

const getAllProducts = (req, res) => {
        var sql = "SELECT * FROM products";
        connexion.query(sql, function(error, result) {
            if (error) throw error;
            console.log(result);
            res.status(200).json(result);
        });
        // Product.findAll()
        // .then((response) => res.status(200).json(response))
        // .catch(error => {
        //     console.error(error)
        //     res.status(500).json({ errorCode: 500, message: "Server Error"});
        // });
}

const getProductsByCategory = (req, res) => {
    var sql = `SELECT * FROM products WHERE category='${req.params.category}'`;
        connexion.query(sql, function(error, result) {
            if (error) throw error;
            console.log(result);
            var products_data = result;
            res.status(200).json(products_data);
        });
    // Product.findAll({
    //     where: {
    //         category: req.params.category
    //     }
    // })
    // .then(products_data => res.status(200).json(products_data))
    // .catch(error => {
    //     console.error(error)
    //     res.status(500).json({ errorCode: 500, message: "Server Error"})
    // });
}

const getOneProduct = (req, res) => {
    var sql = `SELECT * FROM products WHERE product_name='${req.params.product_name}'`;
        connexion.query(sql, function(error, result) {
            if (error) throw error;
            console.log(result);
            var products_data = result;
            res.status(200).json(products_data);
        });
    // Product.findAll({
    //     where: {
    //         product_name: req.params.product_name
    //     }
    // })
    // .then(products_data => res.status(200).json(products_data))
    // .catch(error => {
    //     console.error(error)
    //     res.status(500).json({ errorCode: 500, message: "Server Error"})
    // });
}


const getAllCategories = (req, res) => {
    var sql = "SELECT * FROM categories";
        connexion.query(sql, function(error, result) {
            if (error) throw error;
            console.log(result);
            res.status(200).json(result);
        });
    // Category.findAll()
    // .then((response) => res.status(200).json(response))
    // .catch(error => {
    //     console.error(error)
    //     res.status(500).json({ errorCode: 500, message: "Server Error"});
    // });
}

const getAllName = (req, res) => {
    let category_name_list = [];

    var sql = "SELECT category_name FROM categories";
    connexion.query(sql, function(error, result) {
        if (error) throw error;
        result.forEach(category => {
            category_name_list.push(category.category_name);
        })
        console.log(category_name_list);
        res.status(200).json(category_name_list)
    });
    
    // Category.findAll({
    //     attributes: ['category_name']
    // })
    // .then((response) => {
    //     response.forEach(category => {
    //         category_name_list.push(category.dataValues.category_name);
    //     })
    //     console.log(category_name_list);
    //     res.status(200).json(category_name_list)
    // })
    // .catch(error => {
    //     console.error(error)
    //     res.status(500).json({ errorCode: 500, message: "Server Error"});
    // });
    
}

module.exports = {
    getAllProducts,
    getProductsByCategory,
    getOneProduct,
    getAllCategories,
    getAllCategoriesInList: getAllName,
};
