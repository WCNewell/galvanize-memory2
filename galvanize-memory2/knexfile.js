module.exports = {
  development: {
    client: "pg",
    connection: "postgres:///galvanize-memory2"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
