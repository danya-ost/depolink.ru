const { Sequelize } = require('sequelize');

// Подключение к базе данных MySQL
const sequelize = new Sequelize('u1650985_lk', 'u1650985_lk', 'zI5bX0xK1brM7aY2', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
