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
