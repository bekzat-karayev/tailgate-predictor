const express = require('express');
const axios = require('axios');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
// Serve the React static files after build
app.use(express.static("../client/build"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api/hello", (req, res) => {
  axios.get('https://randomuser.me/api/?page=1&results=10')
  .then(response => {
    res.send(response.data);
  });
});

// All other unmatched requests will return the React app
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});