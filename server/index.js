// Section 1
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const config = require('../env/config.js');
const dotenv = require('dotenv').config();
const ENV = process.env.NODE_ENV || "production";
const PORT = process.env.PORT || 5000;

// Section 2
const app = express();
app.use(
  cors({
    credentials: true,
    origin: config[ENV].portal,
  }),
);

// Section 3
app.get('/', (req, res) => { 
 res.send("<h1>Home page</h1>");
});

app.get('/users', (req, res) => {
  axios.get('https://randomuser.me/api/?page=1&results=10')
   .then(response => {
     res.send(response.data);
   });
});

// Section 4
app.listen(PORT, () => {
 console.log(`server started on port ${PORT}`);
});