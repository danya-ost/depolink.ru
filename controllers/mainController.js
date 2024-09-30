const PageMeta = require('../models/PageMeta');

module.exports = {
    index: async (req, res) => {
        try {
            const meta = await PageMeta.findOne({ where: { page: 'index' } });
            res.render('index', {
                title: meta?.title || 'Главная страница',
                message: 'Добро пожаловать в мое Node.js приложение!',
                description: meta?.description,
                keywords: meta?.keywords
            });
        } catch (error) {
            console.error('Ошибка получения мета-данных:', error);
            res.render('index', { title: 'Главная страница', message: 'Добро пожаловать в мое Node.js приложение!' });
        }
    },
    about: async (req, res) => {
        try {
            const meta = await PageMeta.findOne({ where: { page: 'about' } });
            res.render('about', {
                title: meta?.title || 'О нас',
                message: 'Это страница "О нас".',
                description: meta?.description,
                keywords: meta?.keywords
            });
        } catch (error) {
            console.error('Ошибка получения мета-данных:', error);
            res.render('about', { title: 'О нас', message: 'Это страница "О нас".' });
        }
    },
    contacts: async (req, res) => {
        try {
            const meta = await PageMeta.findOne({ where: { page: 'contacts' } });
            res.render('contacts', {
                title: meta?.title || 'Контакты',
                message: 'Это страница "Контакты".',
                description: meta?.description,
                keywords: meta?.keywords
            });
        } catch (error) {
            console.error('Ошибка получения мета-данных:', error);
            res.render('contacts', { title: 'Контакты', message: 'Это страница "Контакты".' });
        }
    }
};
