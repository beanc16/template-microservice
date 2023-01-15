// Development environment
export const devPort = 8000;
export const devUrl = `http://localhost:${devPort}`;

// Production environment
export const prodPort = (process.env.PORT) ? process.env.PORT : 80;
// TODO: Update prodUrl
export const prodUrl = "https://template-microservice-api.herokuapp.com";

// General
export const port = (process.env.PORT) ? process.env.PORT : devPort;
