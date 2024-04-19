const express = require('express');
const axios = require('axios');
const path = require('path');
const pg = require('pg');

const PORT = process.env.PORT || 5000;
const app = express();

const config = {
  host: 'tailgate-predictor-pgsql.postgres.database.azure.com',
  // Do not hard code your username and password.
  // Consider using Node environment variables.
  user: 'tailgate_predictor_admin',     
  password: 'Inter@93',
  database: 'postgres',
  port: 5432,
  ssl: true
};
const pgclient = new pg.Client(config);

app.use(express.json());
// Serve the React static files after build
app.use(express.static("../client/build"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

pgclient.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

app.get('/check-connection', async (req, res) => {
  try {
    // Attempt to connect to the database
    await pgclient.query('SELECT NOW()');
    res.status(200).send('Connected');
  } catch (error) {
    console.error('Error connecting to database:', error);
    res.status(500).send('Connection Failed');
  }
});

// All other unmatched requests will return the React app
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});