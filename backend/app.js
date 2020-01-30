const Koa = require('koa');
const app = new Koa();
const router = require('./api/routes/router');

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;