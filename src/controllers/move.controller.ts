import { Request, Response, NextFunction } from 'express';
import { errorHandler, successHandler } from '../util/router';
import { logger } from '../util/logger';
import { services } from '../services';
import { MoveResponse } from '../models/move-response';

export let getInitialMove = (req: Request, res: Response, next: NextFunction) => {
  return successHandler(res, {
    status: 200,
    response: new MoveResponse('up')
  });
};

export let getNextMove = (req: Request, res: Response, next: NextFunction) => {
  return successHandler(res, {
    status: 200,
    response: new MoveResponse('up')
  });
};

export let endGame = (req: Request, res: Response, next: NextFunction) => {
  return successHandler(res, {
    status: 200,
    response: 'did i win?'
  });
};

export const ping = (req: Request, res: Response, next: NextFunction) => {
  return successHandler(res, {
    status: 200,
    response: 'pong'
  });
};
