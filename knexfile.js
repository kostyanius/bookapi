module.exports = {
  client: 'pg',
  connection: {
    host : process.env.PG_HOST || 'postgresql.postgres.database.azure.com',
    port : process.env.PG_PORT || 5432,
    user : process.env.PG_USER || "postgres@postgresql",
    password : process.env.PG_PASSWORD || 'kEYZXMjhEgQh34ZGHzk',
    database : process.env.PG_DATABASE || 'bookapi',
    charset  : 'utf8'
  }
};
