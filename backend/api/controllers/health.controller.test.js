const { health } = require('./health.controller');

test('Should output healthy json with healthy message', async () => {
  const ctx = {};
  await health(ctx, () => {});
  expect(ctx.body).toEqual({
    message: 'Healthy!',
    success: true
  });
});