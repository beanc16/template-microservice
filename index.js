/************
 * REQUIRES *
 ************/

// Read environment variables
const dotenv = require("dotenv");
dotenv.config();


// Important variables
const { serverInfoEnum: serverInfo } = require("./src/js/enums");


// Routing
const express = require("express");
const app = express();


// CORS
const cors = require("cors");
app.use(cors());


// Telemetry
const {
  logger,
  express: {
    errorHandler,
    logEndpointDuration,
  },
} = require("@beanc16/logger");


// Swagger
/*
// TODO: Add swagger docs
const swaggerUi = require("swagger-ui-express");
const docs = require("./docs");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs));
*/


// Custom variables
const apiPrefix = "api";





/********************
 * START MIDDLEWARE *
 ********************/

app.use((req, res, next) => logEndpointDuration(req, res, next));





/*******************
 * EXTERNAL ROUTES *
 *******************/

// Api
const apiEndpoints = require("./src/api");
app.use(`/${apiPrefix}`, apiEndpoints);

// Errors
const errorEndpoints = require("./src/apiErrors");
app.use(`/`, errorEndpoints);





/******************
 * END MIDDLEWARE *
 ******************/

app.use((err, req, res, next) => errorHandler(err, req, res, next));





/********
 * PORT *
 ********/

app.listen(serverInfo.port, function ()
{
  if (err) logger.error("Error in server setup", err);
  logger.info(`App listening on port ${serverInfo.port}`);
});
