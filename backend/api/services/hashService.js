const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  async hash(password) {
    try {
      const hash = await bcrypt.hash(password, saltRounds);
      if (!hash) return false;
      return hash;
    } catch (error) {
      console.error(error);
      return false
    }
  },
  async compare(password, hash) {
    try {
      const match = bcrypt.compare(password, hash);
      return match ? true : false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}