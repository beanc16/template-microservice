import express from 'express';

import { healthCheckRoutes } from './routes/healthCheck.js';

export const v1Routes = express();

v1Routes.use('/ping', healthCheckRoutes);
