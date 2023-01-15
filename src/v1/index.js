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
const {
    pingEndpoints,
} = require("./routes");

app.use(`/ping`, pingEndpoints);





/********************
 * ERROR MIDDLEWARE *
 ********************/

/*
app.use(function (err, req, res, next)
{
    // Error-handling middleware is defined last, after other app.use() and routes calls
    console.error(err);

    res.send(err);
});
*/





module.exports = app;
