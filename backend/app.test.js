const request = require('supertest');
const app = require('./app');

test('Health route', async () => {
  const response = await request(app.callback()).get('/api/health');
  expect(response.status).toEqual(200);
  expect(response.type).toEqual('application/json');
});

test('Create person route', async () => {
  const response = await request(app.callback()).post('/api/person');
  expect(response.status).toEqual(200);
  expect(response.type).toEqual('application/json');
});