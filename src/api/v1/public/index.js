/************
 * REQUIRES *
 ************/

// Routing
const express = require("express");
const app = express();





/*******************
 * EXTERNAL ROUTES *
 *******************/

// Endpoints
const { pingEndpoints } = require("./routes");
app.use(`/ping`, pingEndpoints);





module.exports = app;
