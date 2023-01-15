/************
 * REQUIRES *
 ************/

// Read environment variables
import dotenv from "dotenv";
dotenv.config();


// Important variables
import { serverInfoEnum } from "./src/v1/constants/index.js";


// Routing
import express from "express";
const app = express();


// CORS
import cors from "cors";
app.use(cors());


// Telemetry
import loggingTelemetry from "@beanc16/logger";
const {
  logger,
  express: {
    errorHandler,
    logEndpointDuration,
  },
} = loggingTelemetry;


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
import apiEndpoints from "./src/v1/index.js";
app.use(`/${apiPrefix}/v1`, apiEndpoints);

import { errorEndpoints } from "./src/errors/index.js";
app.use(`/`, errorEndpoints);





/******************
 * END MIDDLEWARE *
 ******************/

app.use((err, req, res, next) => errorHandler(err, req, res, next));





/********
 * PORT *
 ********/

app.listen(serverInfoEnum.port, function (err)
{
  if (err) logger.error("Error in server setup", err);
  logger.info(`App listening on port ${serverInfoEnum.port}`);
});
