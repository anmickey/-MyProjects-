import config from 'config';
import express, { Express } from 'express';
import { sequelize } from './bd.js';
import { useExpressServer } from 'routing-controllers';
import { ErrorMw, ToobusyMw } from './middlewares/index.js';
import { User } from './modal/mapping.js';
import multer from 'multer';
import logger from './logger.js';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { UserController } from './controllers/UserController.js';
import hpp from 'hpp';

const upload = multer();
const PORT = config.get('serverPort') || 4500;
const app: Express = express();

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
/* Для защиты от атаки на загрязнение HTTP-параметров (HPP) */
app.use(hpp());
app.use(cookieParser(config.get('secretKey')));
app.use(express.json());
app.use(upload.fields([]));
useExpressServer(app, {
  routePrefix: '/api',
  controllers: [UserController],
  /* Middlewere (ToobusyMw) отслеживает время отклика и, если оно превышает заданное, отправлять сообщение 503 Server Too Busy  */
  middlewares: [ToobusyMw, ErrorMw],
  defaultErrorHandler: false,
  cors: {
    origin: ['mydomain'],
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: ['Accept-Version', 'Authorization', 'Credentials', 'Content-Type'],
  },
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      logger.info(`Server Listening On Port ${PORT}`);
    });
  } catch (err) {
    if (err instanceof Error && 'message' in err) logger.error(err.message);
  }
};

start();
