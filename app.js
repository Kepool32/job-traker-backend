const express = require('express');
const config = require('./src/config/config');
const connectDB = require('./src/config/db');
const vacancyRoutes = require('./src/routes/vacancyRoutes');
const requestLogger = require('./src/middleware/requestLogger');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(requestLogger);
// Middleware для парсинга JSON
app.use(express.json());

// Подключение к базе данных
connectDB();

// Маршруты с валидацией данных
app.use('/api/vacancies', vacancyRoutes);

// Запуск сервера
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
