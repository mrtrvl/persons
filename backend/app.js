const Koa = require('koa');
const app = new Koa();
const router = require('./api/routes/router');
const { errorHandler } = require('./api/handlers');
const body = require('koa-bodyparser');
const db = require('./models');

app.on('error', errorHandler);

db.sequelize.sync({force: true,  alter: true })
  .then(() => console.log('Database models synced ...'))
  .catch(error => {
    console.error(error);
  });

app.use(body());
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;