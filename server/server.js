const express = require('express');
const axios = require('axios');
const path = require('path');
const pgClient = require('./services/dbService')

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
// Serve the React static files after build
app.use(express.static("../client/build"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('/check-connection', async (req, res) => {
  try {
    // Attempt to connect to the database
    await pgClient.query('SELECT NOW()');
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