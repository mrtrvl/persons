const { create } = require('./person.controller');

test('Should output error message because of missing firstName', async () => {
  const ctx = {request: {
    body: {
      "firstName": "",
      "lastName": "Doe",
      "email": "john@john.com",
      "password": "secret"
    }
  }};
  await create(ctx, () => {});
  expect(ctx.body).toEqual({
    message: 'Firstname is required!',
    success: false
  });
});

test('Should output error message because of missing lastName', async () => {
  const ctx = {request: {
    body: {
      "firstName": "John",
      "lastName": "",
      "email": "john@john.com",
      "password": "secret"
    }
  }};
  await create(ctx, () => {});
  expect(ctx.body).toEqual({
    message: 'Lastname is required!',
    success: false
  });
});

test('Should output error message because of missing email', async () => {
  const ctx = {request: {
    body: {
      "firstName": "John",
      "lastName": "Doe",
      "email": "",
      "password": "secret"
    }
  }};
  await create(ctx, () => {});
  expect(ctx.body).toEqual({
    message: 'E-mail is required!',
    success: false
  });
});

test('Should output error message because of missing password', async () => {
  const ctx = {request: {
    body: {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@john.com",
      "password": ""
    }
  }};
  await create(ctx, () => {});
  expect(ctx.body).toEqual({
    message: 'Password is required!',
    success: false
  });
});

test('Should output success message', async () => {
  const ctx = {request: {
    body: {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@john.com",
      "password": "secret"
    }
  }};
  await create(ctx, () => {});
  expect(ctx.body).toEqual({
    message: 'Person is created!',
    success: true
  });
});