import loggingTelemetry from '@beanc16/logger';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { v1Routes } from './src/v1/index.js';
import { errorRoutes } from './src/all/index.js';

// Setup
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Telemetry
const {
    logger,
    express: {
        errorHandler,
        logEndpointDuration,
    },
} = loggingTelemetry;

// Custom variables
const apiPrefix = 'api';





/********************
 * START MIDDLEWARE *
 ********************/

app.use((req, res, next) => logEndpointDuration(req, res, next, logger));





/*******************
 * EXTERNAL ROUTES *
 *******************/

// Api
app.use(`/${apiPrefix}/v1`, v1Routes);
app.use(`/`, errorRoutes);





/******************
 * END MIDDLEWARE *
 ******************/

app.use((
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => errorHandler(err, req, res, next));





/********
 * PORT *
 ********/

app.listen(process.env.PORT, function ()
{
    logger.info(`App listening on port ${process.env.PORT}`);
});
