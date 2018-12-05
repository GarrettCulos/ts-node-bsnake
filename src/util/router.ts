import { Response } from 'express';

class ErrorHandlerInput {
  status: number;
  message: string;
  reason?: string;
  source?: string;
  data?: any;
}
export function errorHandler(res: Response, { status, message, reason, source, data }: ErrorHandlerInput): Response {
  const response: any = {};
  response.status = status ? status : undefined;
  response.reason = reason ? reason : undefined;
  response.message = message ? message : undefined;
  response.data = data ? data : undefined;
  response.source = source ? source : undefined;
  return res.status(status).send(response);
}

class SuccessHandlerInput {
  response?: any;
  status?: number = 200;
}
export function successHandler(res: Response, { response, status }: SuccessHandlerInput): Response {
  return res.status(status).send(response);
}
