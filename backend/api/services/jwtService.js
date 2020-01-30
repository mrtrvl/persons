const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const expiresIn = '1h';

module.exports = {
  async sign(user) {
    try {
      const token = await jwt.sign(user, JWT_SECRET, {expiresIn: expiresIn});
      if (!token) throw(500, 'Token not created!');
      return token;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}