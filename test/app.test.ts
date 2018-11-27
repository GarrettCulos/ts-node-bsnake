import request from 'supertest';
import app from '../src/app';

describe('app.ts test suite', () => {
  it('should return 400 for invalid paths', async () => {
    return request(app)
      .get('/invalidPath')
      .expect(400);
  });
});
