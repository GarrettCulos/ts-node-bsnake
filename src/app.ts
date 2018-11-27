import express from 'express';
import compression from 'compression'; // compresses requests
import bodyParser from 'body-parser';
import { logger } from './util/logger';
import flash from 'express-flash';
import lusca from 'lusca';
import dotenv from 'dotenv';
import expressValidator from 'express-validator';
import { router } from './router';
import { middleware } from './middleware';

const basePath = `/api/v1`;

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env' });

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(flash());
app.use(lusca.xframe('DENY'));
app.use(lusca.xssProtection(true));

app.options(`${basePath}/*`, middleware.validOptions);

app.use(middleware.addCORS);

router.move.snakeRoutes(basePath, app);

app.use((req, res) => {
  res.status(400).send({ message: 'Invalid api call' });
});

export default app;
