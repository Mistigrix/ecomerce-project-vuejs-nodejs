//const { Sequelize } = require('sequelize');
const { Sequelize } = require('sequelize');

module.exports =  new Sequelize('alibaba_copy', 'root', 'rootpassword', {
    host: 'localhost',
    dialect: 'mysql'
});

// try {
//     db.authenticate();
//     console.log('Connection has been established successfully');
// } catch (err) {
//     console.error('Unable to connect to database: ',err);
// }

// export default db;


// 0626
