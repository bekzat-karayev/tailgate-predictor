
const pg = require('pg');

const config = {
  host: 'tailgate-predictor-pgsql.postgres.database.azure.com',
  // Do not hard code your username and password.
  // Consider using Node environment variables.
  user: 'tailgate_predictor_user',     
  password: 'dVDq82qZ',
  database: 'postgres',
  port: 5432,
  ssl: true
};
const pgClient = new pg.Client(config);

pgClient.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

module.exports = pgClient;