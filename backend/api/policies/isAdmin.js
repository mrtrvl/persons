module.exports = {
  async isAdmin(ctx, next) {
    try {
      next();
    } catch (error) {
      console.error(error);
    }
  }
}