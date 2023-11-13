const logger = require('./logger');
const cookieParser = require('cookie-parser');
const express = require('express');
const config = require('config');
const hpp = require('hpp');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const helmet = require('helmet');

const PORT = config.get('serverPort') || 5000;
const sequelize = require('./bd');
const router = require('./routers/index');
const { errorMw, toobusyMw } = require('./middleware/index');

const app = express();
/* Helmet помогает защитить приложения Express, устанавливая заголовки ответов HTTP */
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'script-src': ['self', 'mydomain'],
      },
    },
  }),
);
/* Ограничение размера запроса */
app.use(express.json({ limit: '1kb' }));
app.use(
  cors({
    origin: ['mydomain'],
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: ['Accept-Version', 'Authorization', 'Credentials', 'Content-Type'],
  }),
);
app.use(express.json());
app.use(fileUpload({}));
/* Для защиты от атаки на загрязнение HTTP-параметров (HPP) */
app.use(hpp());
app.use(cookieParser(config.get('secretKey')));
/* Middlewere (toobusyMw) отслеживает время отклика и, если оно превышает заданное, отправлять сообщение 503 Server Too Busy  */
app.use('/api', toobusyMw, router, errorMw);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => logger.info(`Server Listening On Port ${PORT}`));
  } catch (error) {
    logger.error(error.message);
  }
};

start();
