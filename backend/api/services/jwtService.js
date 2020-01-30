const jwt = require('jsonwebtoken');
// const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  async sign(user, JWT_SECRET) {
    try {
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}