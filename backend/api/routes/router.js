const Router = require('koa-router');
const router = new Router({ prefix: '/api'});
const {
  HealthController,
  PersonController
} = require('../controllers');

// Health endpoints
router
  .get('/health', HealthController.health);

// Person endpoints
router
  .post('/person', PersonController.create)
  .post('/login', PersonController.login)
  .get('/person', PersonController.findAll);

module.exports = router;