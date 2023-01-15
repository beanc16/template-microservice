/************
 * REQUIRES *
 ************/


// Routing
import express from "express";
const app = express();
export default app;





/*******************
 * EXTERNAL ROUTES *
 *******************/

// Endpoints
import { pingEndpoints } from "./routes/index.js";

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
