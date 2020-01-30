module.exports = {
  async health(ctx) {
    ctx.body = {
      message: 'Healthy!',
      success:true
    }
  }
}