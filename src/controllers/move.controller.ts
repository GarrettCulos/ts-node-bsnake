import { Request, Response, NextFunction } from 'express';
import { errorHandler, successHandler } from '../util/router';
import { logger } from '../util/logger';
import { services } from '../services';

export let getInitialMove = (req: Request, res: Response, next: NextFunction) => {
  
    return successHandler(res, {
      data: 'to implement',
      status: 200
    });
};

export let getNextMove = (req: Request, res: Response, next: NextFunction) => {
  return errorHandler(res, {
    status: 200,
    message: 'error creating pricing record',
    source: 'pricing.controllers'
  });
};
