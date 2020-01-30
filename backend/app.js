const path = require('path');
require('dotenv').config({ path: '../.env' });
const Koa = require('koa');
const app = new Koa();

const PORT = process.env.PORT;

app.use(async (ctx, next) => {
  ctx.body = {
    message: 'Response',
    success: true
  }
});

app.listen(PORT);
console.log(`Server is running on port: ${ PORT }`);