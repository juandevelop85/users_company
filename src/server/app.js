require('dotenv').config();

const express = require('express');
const compression = require('compression');
const path = require('path');
const bluebird = require('bluebird');
const fs = require('fs');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const OpenApiValidator = require('express-openapi-validator');
const helmet = require('helmet');
const postgresDB = require('../db/models/postgres');

const ROUTES_DIR = '../routes/';

const app = express();

const main = async () => {
  app.use(compression());
  app.use(express.json());
  app.use(express.text());
  app.use(express.urlencoded({ extended: false }));
  app.use(helmet());

  app.use(cors());

  const directories = await bluebird.promisify(fs.readdir)(
    path.join(__dirname, ROUTES_DIR)
  );

  const options = {
    explorer: true,
    swaggerOptions: {
      urls: [],
    },
  };

  for (const c of directories) {
    try {
      const apiSpec = path.join(
        __dirname,
        `../documentation/${c}_documentation.yaml`
      );
      const swaggerDocument = YAML.load(apiSpec);
      app.use(`/spec/${c}`, express.static(apiSpec));

      const jsonRoute = `/spec/${c}/json`;
      app.get(jsonRoute, (req, res) => res.json(swaggerDocument));

      let swaggerAuxRoute = '';
      if (process.env.NODE_ENV !== 'development') {
        swaggerAuxRoute = '/user-companies-monolith-group2';
      }

      options.swaggerOptions.urls.push({
        url: `${swaggerAuxRoute}${jsonRoute}`,
        name: c,
      });

      app.use(
        OpenApiValidator.middleware({
          apiSpec,
          validateResponses: false, // <-- to validate responses
        })
      );

      // require(path.join(__dirname, ROUTES_DIR, c)).init(app);
      const moduleRoute = require(path.join(__dirname, ROUTES_DIR, c));

      app.use((req, res, next) => {
        res.setTimeout(15000, () => {
          const response = {
            message: 'Error de conexion',
            token: null,
            error: true,
          };
          res.json(response);
        });

        next();
      });

      app.use((err, req, res, next) => {
        const codeError = err.status || 500;
        res.status(codeError).json({
          message: err.message,
          errors: err.errors,
        });
        next();
      });

      app.use(`/${c}`, moduleRoute);
    } catch (error) {
      console.error(error);
    }
  }

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));

  global.DB = postgresDB;

  return app;
};

main();
module.exports = app;
