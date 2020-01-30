module.exports = {
  /**
   * @api {get} /api/health Get health message
   * @apiGroup Health
   * @apiName getHealthMessage
   * @apiDescription API health control
   * @apiSuccessExample {json} Success-Response:
   * HTTP/1.1 200 OK
   * {
   *   "message": "Healthy!",
   *   "success": true
   * }
   */
  async health(ctx) {
    ctx.body = {
      message: 'Healthy!',
      success:true
    }
  }
}