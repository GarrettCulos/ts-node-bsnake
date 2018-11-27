import dotenv from 'dotenv';
import request from 'supertest';
import app from '../../src/app';

describe('ROUTING - Users', () => {
  dotenv.config({ path: '../../.env' });

  it('should return 200 from /move', async () => {
    return request(app)
      .get('/api/v1/move')
      .expect(200);
  });

  it('should return 200 from /start', async () => {
    return request(app)
      .get('/api/v1/start')
      .expect(200);
  });
});
