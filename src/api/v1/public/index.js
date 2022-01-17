/************
 * REQUIRES *
 ************/

// Routing
const express = require("express");
const app = express();





/*******************
 * EXTERNAL ROUTES *
 *******************/

// Ping
const pingEndpoints = require("./routes/ping");
app.use(`/`, pingEndpoints);





module.exports = app;
