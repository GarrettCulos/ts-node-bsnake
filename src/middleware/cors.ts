import { Request, Response, NextFunction } from 'express';
import { logger } from '../util/logger';
import { defaultHeaders } from '../util/requestConfig';

export const addCORS = ( req: Request, res: Response, next: NextFunction ) => {
	logger.log('debug', `${req.method}  ${req.url}`);
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,HEAD,OPTIONS');
	res.header('Access-Control-Allow-Headers', defaultHeaders);
	next();
};
