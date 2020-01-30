module.exports = {
  /**
   * @api {post} /api/person Create new Person
   * @apiGroup Person
   * @apiName createPerson
   * @apiDescription Authenticated Person can create new Person
   * @apiParam {String} firstName Firstname is required
   * @apiParam {String} lastName Lastname is required
   * @apiParam {String} email E-mail is required
   * @apiParam {String} password Password is required
   * @apiHeader {String} authorization Users authorization Bearer token
   * @apiHeaderExample {json} Header-Example:
   *  {
   *    "Authorization": "Bearer usersTokenValue"
   *  }
   * @apiSuccessExample {json} Success-Response:
   * HTTP/1.1 200 OK
   * {
   *   "message": "Person is created!",
   *   "success": true
   * }
   * @apiErrorExample {json} Error-Response:
   * HTTP/1.1 500
   * {
   *   "error": "Firstname is required!",
   *   "success": false
   * }
   */
  async create(ctx) {
    try {
      const { firstName, lastName, email, password, isAdmin } = ctx.request.body;
      if (!firstName) throw (400, 'Firstname is required!');
      if (!lastName) throw (400, 'Lastname is required!');
      if (!email) throw (400, 'E-mail is required!');
      if (!password) throw (400, 'Password is required!');
      ctx.body = {
        message: 'Person is created!',
        success: true
      }
    } catch (error) {
      console.log(error);
      ctx.body = {
        message: error,
        success: false
      }
    }
  },
  async findAll(ctx) {

  },
  async findOne(ctx) {

  },
  async update(ctx) {

  },
  async delete(ctx) {
    
  },
  async login(ctx) {
    
  }
}