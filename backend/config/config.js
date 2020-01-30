module.exports = {
  "development": {
    "username": "root",
    "password": `${process.env.MYSQL_ROOT_PASSWORD}`,
    "database": `${process.env.DATABASE_DEV}`,
    "host": `${process.env.DATABASE_HOST}`,
    "dialect": "mariadb"
  },
  "test": {
    "username": "root",
    "password": `${process.env.MYSQL_ROOT_PASSWORD}`,
    "database": `${process.env.DATABASE_TEST}`,
    "host": `${process.env.DATABASE_HOST}`,
    "dialect": "mariadb"
  },
  "production": {
    "username": "root",
    "password": `${process.env.MYSQL_ROOT_PASSWORD}`,
    "database": `${process.env.DATABASE_PROD}`,
    "host": `${process.env.DATABASE_HOST}`,
    "dialect": "mariadb"
  }
}
