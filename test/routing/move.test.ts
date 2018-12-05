import dotenv from 'dotenv';
import request from 'supertest';
import app from '../../src/app';

describe('ROUTING - Moves', () => {
  dotenv.config({ path: '../../.env' });

  it('should return 200 from /move', async () => {
    return request(app)
      .post('/api/v1/move')
      .expect(200);
  });

  it('should return 200 from /start', async () => {
    return request(app)
      .post('/api/v1/start')
      .expect(200);
  });

  it('should return 200 from /ping', async () => {
    return request(app)
      .post('/api/v1/ping')
      .expect(200);
  });

  it('should return 200 from /end', async () => {
    return request(app)
      .post('/api/v1/end')
      .expect(200);
  });
});
