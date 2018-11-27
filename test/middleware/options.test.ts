import dotenv from 'dotenv';
import { middleware } from '../../src/middleware';
import { Request, Response } from 'express';

describe('GET call pricing api', () => {
  dotenv.config({ path: '../../.env' });

  it('addCors sanity', async () => {
    return expect(middleware.addCORS).toBeDefined();
  });

  it('validOptions sanity', async () => {
    return expect(middleware.validOptions).toBeDefined();
  });

  it('middleware adds cors', async () => {
    const req = {};
    const res = { header: (x, y) => {}, send: x => x };
    const result = middleware.addCORS(<Request>req, <Response>res, () => {});
    return expect(result).toEqual(undefined);
  });

  it('middleware validateOptions', async () => {
    const req = {};
    const res = { header: (x, y) => {}, send: x => x };
    const result = middleware.validOptions(<Request>req, <Response>res, () => {});
    return expect(result).toEqual(200);
  });
});
