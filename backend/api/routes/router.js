const Router = require('koa-router');
const router = new Router({ prefix: '/api'});
const {
  HealthController,
  PersonController
} = require('../controllers');
const {
  isAuthenticated,
  isAdmin
 } = require('../policies');

// Health endpoints
router
  .get('/health', HealthController.health);

// Person endpoints
router
  .post('/person', isAuthenticated, isAdmin, PersonController.create)
  .post('/login', PersonController.login)
  .get('/person', isAuthenticated, isAdmin, PersonController.findAll)
  .get('/profile', isAuthenticated, PersonController.profile);

module.exports = router;