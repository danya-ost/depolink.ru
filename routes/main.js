const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Главная страница
router.get('/', mainController.index);

// Страница "О нас"
router.get('/about', mainController.about);

// Страница "Контакты"
router.get('/contacts', mainController.contacts);

module.exports = router;
