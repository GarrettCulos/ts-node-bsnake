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
  data?: any;
  message?: string;
  status?: number = 200;
}
export function successHandler(res: Response, { data, message, status }: SuccessHandlerInput): Response {
  const response: any = {};
  response.status = status;
  response.data = data;
  response.message = message ? message : undefined;
  return res.status(status).send(response);
}
