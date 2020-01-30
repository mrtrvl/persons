const { hash, compare } = require('./hashService');

test('Should return encrypted password', async () => {
  const password = 'password';
  const encryptedPassword = await hash(password);
  expect(typeof encryptedPassword).toBe('string')
});

test('Should return true for compare password and hash', async () => {
  const password = 'password';
  const hash = '$2b$10$ie5NnAvhb4v6x.oQWqEO6O05Q.Wg2NAQa4EZeaQDhkWH/6j5c.PF2';
  const match = await compare(password, hash);
  expect(match).toBeTruthy();
});

test('Should return false due to incorrect hash', async () => {
  const password = 'password';
  const hash = '$$10$21VOsGhYk7vtXsMSHwBPQemP27aR.a8y2k1oefMzwfu//zoswScKm';
  const match = await compare(password, hash);
  expect(match).toBeFalsy();
});

test('Should return false due to incorrect password', async () => {
  const password = 'passwor';
  const hash = '$2b$10$ie5NnAvhb4v6x.oQWqEO6O05Q.Wg2NAQa4EZeaQDhkWH/6j5c.PF2';
  const match = await compare(password, hash);
  expect(match).toBeFalsy();
});