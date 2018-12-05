import { Express, Handler } from 'express';
import { controllers } from '../controllers';

export function moveRoutes(basePath: string, app: Express) {
  app.post(`${basePath}/start`, controllers.move.getInitialMove);
  app.post(`${basePath}/move`, controllers.move.getNextMove);
  app.post(`${basePath}/end`, controllers.move.endGame);
  app.post(`${basePath}/ping`, controllers.move.ping);
}
