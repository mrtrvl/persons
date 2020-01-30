module.exports = {
  async isAdmin(ctx, next) {
    try {
      console.log(ctx.state);
      if (!ctx.state.isAdmin) throw (401, 'Unauthorized');
      await next();
    } catch (error) {
      console.error(error);
    }
  }
};
