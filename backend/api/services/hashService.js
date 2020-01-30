const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  async hash(password) {
    try {
      const hash = await bcrypt.hash(password, saltRounds);
      console.log(hash);
      if (!hash) return false;
      return hash;
    } catch (error) {
      console.error(error);
      return false
    }
  },
  async compare(password, hash) {
    try {
      const match = await bcrypt.compare(password, hash);
      console.log(match);
      return match ? true : false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}