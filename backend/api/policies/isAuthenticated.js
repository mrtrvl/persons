const { JwtService } = require('../services');

module.exports = {
  async isAuthenticated(ctx, next) {
    try {
      if (!ctx.headers.authorization) throw(401, 'Authorization header missing!');
      const bearer = ctx.headers.authorization;
      const token = bearer.split(' ')[1];
      if(!token) throw(401, 'Bearer is missing!');
      const decoded = await JwtService.verify(token);
      if(!decoded) throw(401, 'Unauthorized!');
      const personId = decoded.id;
      const person = await ctx.db.Person.findOne({ where: {id: personId}});
      if(!person) throw(401, 'Unauthorized!');
      ctx.state.user = personId;
      ctx.state.isAdmin = person.isAdmin;
      await next();
    } catch (error) {
      console.error(error);
    }
  }
}
