import dotenv from 'dotenv';
import request from 'supertest';
import app from '../../src/app';

describe('ROUTING - Users', () => {
  dotenv.config({ path: '../../.env' });

  it('should return 200 from /sets', () => {
    return request(app)
      .get('/api/v1/user')
      .expect(200);
  });
});
