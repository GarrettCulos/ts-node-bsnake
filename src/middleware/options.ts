import { Request, Response, NextFunction } from 'express';
import { defaultHeaders } from '../util/requestConfig';
export const validOptions = ( req: Request, res: Response, next: NextFunction ) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,HEAD,OPTIONS');
	res.header('Access-Control-Allow-Headers', defaultHeaders);
	return res.send(200);
};
