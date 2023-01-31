const { DataTypes } = require('sequelize');
const db = require('../database');

const Product = db.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_url: {
            type: DataTypes.STRING,
            // default: 'https://www.mrpanet.org/global_graphics/default-store-350x350.jpg'
        },
    }, {
        timestamps: true,
    });

    // Product.findAll({attributes: ['product_name', 'image_url                                                                                                                                                                                                         ']})
    //     .then((response) => console.log(response[0].dataValues))
    //     .catch(error => {
    //         console.error(error)
    //     });

module.exports.Product = Product;
