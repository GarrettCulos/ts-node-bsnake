import { Express, Handler } from 'express';
import { controllers } from '../controllers';

export function snakeRoutes(basePath: string, app: Express) {
  app.get(`${basePath}/start`, controllers.move.getInitialMove);
  app.get(`${basePath}/move`, controllers.move.getNextMove);
}
