import { Express, Handler } from 'express';
import { controllers } from '../controllers';
import { middleware } from '../middleware';

export function pricingRoutes(basePath: string, app: Express) {
	app.get( `${basePath}/start`, controllers.move.getInitialMove);
	app.post( `${basePath}/move`, controllers.move.getNextMove);
}
