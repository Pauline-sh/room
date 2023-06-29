import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';

export const app: express.Express = express();

app.use(logger('dev'));
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    'base-uri': ["'self'"],
    'default-src': ["'self'",],
  },
}));