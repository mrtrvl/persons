const { health } = require('./health.controller');

test('Should output healthy json with healthy message', async () => {
  const ctx = {};
  const next = jest.fn(() => {
    expect(ctx.body).toBe({
      message: 'Healthy!',
      success: true
    });
  });
});