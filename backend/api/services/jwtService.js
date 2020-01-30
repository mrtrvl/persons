const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const expiresIn = '1h';

module.exports = {
  async sign(user) {
    try {
      const token = await jwt.sign(user, JWT_SECRET, { expiresIn });
      if (!token) throw(500, 'Token not created!');
      return token;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
  async verify(token) {
    try {
      const decoded = await jwt.verify(token, JWT_SECRET);
      return decoded;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}