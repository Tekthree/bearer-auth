'use strict';

// Start up DB Server
require('dotenv').config();
const { db } = require('./src/auth/models/index.js');
const server = require('./src/server.js');



const PORT = process.env.PORT || 3000;


db.sync()
  .then(() => {
    // Start the web server
    server.start(PORT);
  });

