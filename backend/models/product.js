const { DataTypes } = require('sequelize');
const db = require('../database');

const Product = db.define('Product', {
        product_id: {
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

const Category = db.define('products_categories', {
    category_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    icon_url: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    timestamps: true,
});

Category.hasMany(Product, { foreignKey: 'product_id' });
Product.hasOne(Category, { foreignKey: 'category_id' });

module.exports.Product = Product;
module.exports.Category = Category;
