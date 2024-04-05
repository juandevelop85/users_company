const http = require('http');
const app = require('./app');
// const postgresDB = require('../db/models/postgres');
const { startMigration } = require('../db/functions/migration');

const port = Number(process.env.SERVICES_PORT) || 3000;

// global.DB = postgresDB;

startMigration();

const serverInit = http.createServer(app);

serverInit.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
