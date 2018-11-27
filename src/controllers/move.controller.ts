import { Request, Response, NextFunction } from 'express';
import { errorHandler, successHandler } from '../util/router';
import { logger } from '../util/logger';
import { services } from '../services';

export let getInitialMove = (req: Request, res: Response, next: NextFunction) => {
  return successHandler(res, {
    data: 'defs starting',
    status: 200
  });
};

export let getNextMove = (req: Request, res: Response, next: NextFunction) => {
  return successHandler(res, {
    status: 200,
    data: 'defs moving'
  });
};
