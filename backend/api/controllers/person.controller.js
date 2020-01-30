module.exports = {
  async create(ctx) {
    try {
      const { firstName, lastName, email, password } = ctx.request.body;
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
    
  }
}