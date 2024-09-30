const { DataTypes } = require('sequelize');
const sequelize = require('../database');

// Определение модели для мета-данных страницы
const PageMeta = sequelize.define('PageMeta', {
    page: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    keywords: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'page_meta', // Имя таблицы в базе данных
    timestamps: false // Если нет столбцов createdAt и updatedAt
});

module.exports = PageMeta;
