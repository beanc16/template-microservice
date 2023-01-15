/************
 * REQUIRES *
 ************/

// Read environment variables
const dotenv = require("dotenv");
dotenv.config();


// Important variables
const { serverInfoEnum: serverInfo } = require("./src/v1/constants");


// Routing
const express = require("express");
const app = express();


// CORS
const cors = require("cors");
app.use(cors());


// Swagger
/*
// TODO: Add swagger docs
const swaggerUi = require("swagger-ui-express");
const docs = require("./docs");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs));
*/


// Custom variables
const apiPrefix = "api";





/*******************
 * EXTERNAL ROUTES *
 *******************/

// Api
const apiEndpoints = require("./src/v1");
app.use(`/${apiPrefix}/v1`, apiEndpoints);

const errorEndpoints = require("./src/errors");
app.use(`/`, errorEndpoints);





/********
 * PORT *
 ********/

app.listen(serverInfo.port, async function ()
{
  console.info("App listening on port " + serverInfo.port);
});
