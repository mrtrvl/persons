const {
  HashService,
  JwtService
  } = require('../services');

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
   *   "success": true,
   *   "person": {
   *      "id": 1,
   *      "firstName": "John",
   *      "lastName": "Doe",
   *      "email": "john@john.com",
   *      "isAdmin": false
   *    }
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
      const encryptedPassword = await HashService.hash(password);
      const person = await ctx.db.Person.create({
        firstName,
        lastName,
        email,
        password: encryptedPassword,
        isAdmin: isAdmin ? true : false
      });
      if (!person) throw(500, 'Something went wrong!');
      ctx.body = {
        message: 'Person is created!',
        success: true,
        person: {
          id: person.id,
          firstName: person.firstName,
          lastName: person.lastName,
          email: person.email,
          isAdmin: person.isAdmin
        }
      };
    } catch (error) {
      console.error(error);
      ctx.body = {
        message: error,
        success: false
      }
    }
  },
  async findAll(ctx) {
    try {
      const persons = await ctx.db.Person.findAll({
        attributes: [
          'id',
          'firstName',
          'lastName',
          'email',
          'isAdmin'
        ]});
      ctx.body = {
        message: 'All persons.',
        success: true,
        persons
      }
    } catch (error) {
      console.error(error);
      ctx.body = {
        message: error,
        success: false
      }
    }

  },
  async findOne(ctx) {

  },
  async update(ctx) {

  },
  async delete(ctx) {
    
  },
  async login(ctx) {
    try {
      const { email, password } = ctx.request.body;
      if (!email) throw(500, 'E-mail is required!');
      if (!password) throw(500, 'Password is required!');
      const person = await ctx.db.Person.findOne({ where: { email }});
      if (!person) throw(401, 'Person not found!');
      const valid = await HashService.compare(password, person.password);
      if (!valid) throw(401, 'Access denied!');
      const token = await JwtService.sign({ id: person.id, isAdmin: person.isAdmin });
      if (!token) throw(500, 'Something went wrong!');
      ctx.body = {
        message: 'Access token',
        success: true,
        token
      }
    } catch (error) {
      console.log(error);
      ctx.body = {
        message: error,
        success: false
      }
    }
  },
  async profile(ctx) {
    try {
      const person = await findPerson(ctx);
      if (!person) throw (500, 'User error!');
      ctx.body = {
        message: 'User profile',
        success: true,
        person
      };
    } catch (error) {
      console.log(error);
      ctx.body = {
        message: error,
        success: false
      }
    }
  }
}

const findPerson = async (ctx) => {
  const id = await ctx.state.user;
  const person = await ctx.db.Person.findOne(
    {
      where: { id },
      attributes: [
        'id',
        'firstName',
        'lastName',
        'email',
        'isAdmin'
      ]
    });
  if (!person) return false;
  return person;
}