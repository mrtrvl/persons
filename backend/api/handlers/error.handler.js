module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.log(error);
    ctx.status = error.statusCode || error.status || 500;
    ctx.body = {
      message: error.message,
      success: false
    };
  }
}