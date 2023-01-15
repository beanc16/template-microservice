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


// Custom variables
const apiPrefix = "api";





/*******************
 * EXTERNAL ROUTES *
 *******************/

// Api
import apiEndpoints from "./src/v1/index.js";
app.use(`/${apiPrefix}/v1`, apiEndpoints);

import { errorEndpoints } from "./src/errors/index.js";
app.use(`/`, errorEndpoints);





/********
 * PORT *
 ********/

app.listen(serverInfoEnum.port, async function ()
{
  console.info("App listening on port " + serverInfoEnum.port);
});
