const Router = require('koa-router');
const router = new Router({ prefix: '/api'});
const {
  HealthController,
  PersonController
} = require('../controllers');
const { isAuthenticated } = require('../policies');

// Health endpoints
router
  .get('/health', HealthController.health);

// Person endpoints
router
  .post('/person', isAuthenticated, PersonController.create)
  .post('/login', PersonController.login)
  .get('/person', isAuthenticated, PersonController.findAll)
  .get('/profile', isAuthenticated, PersonController.profile);

module.exports = router;