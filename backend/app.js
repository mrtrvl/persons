const Koa = require('koa');
const app = new Koa();
const router = require('./api/routes/router');
const { errorHandler } = require('./api/handlers');
const body = require('koa-bodyparser');

app.use(body());
app.use(router.routes());
app.use(router.allowedMethods());
app.on('error', errorHandler);

module.exports = app;