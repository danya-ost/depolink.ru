const express = require('express');
const app = express();
const port = 3000;
const sequelize = require('./database');

sequelize.sync()
    .then(() => {
        console.log('База данных синхронизирована');
    })
    .catch((err) => {
        console.error('Ошибка синхронизации базы данных:', err);
    });


// Настраиваем EJS как шаблонизатор
app.set('view engine', 'ejs');

// Настройка маршрутов
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
