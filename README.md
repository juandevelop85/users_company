
# Prueba (usuarios y compañias)

Api para consultar usuarios, compañias y puntos de venta, y los roles de cada usuario en las compañias.


## Correr localmente

Clonar el proyecto

```bash
  git clone https://github.com/juandevelop85/users_company.git
```

Go to the project directory

```bash
  cd users_company
```

Install dependencies

```bash
  npm install
```

Crear la base de datos
```bash
  npx sequelize db:create
```

Ejecutar migraciones
```bash
  npx sequelize db:migrate
```
* Nota: Las llaves primarias son de tipo UUID, por lo que es necesario instalar en la BD uuid-ossp, las migraciones contienen esta instalación, sin embargo, al ejecutar la migración por primera vez, podria generar un error, por lo que es necesario volver a ejecutar la migración. Igualmente el api, cuando inicia, ejecuta dicho comando.

Ejecutar  los seeds, para insertar valores de pruebas
```bash
  npx sequelize db:seed:all
```

Iniciar el servidor para el ambiente de develop

```bash
  npm run start:development
```


## Ejecutar pruebas unitarias

Para correr las pruebas ejecutar el siguiente comando

```bash
  npm run test
```

Para confirmar el coverage de las pruebas ejecutar el siguiente comando

```bash
npm run jest:coverage
```
## Imagen Docker

Crear imagen docker

```bash
  docker build . -t users_companies
```
    
## Test Coverage


File                                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------------------|---------|----------|---------|---------|-------------------
All files                           |   91.95 |    69.56 |   82.05 |   92.42 |
 controllers                        |     100 |      100 |     100 |     100 |
  companies.controller.js           |     100 |      100 |     100 |     100 |
  users.controller.js               |     100 |      100 |     100 |     100 |
 db/config                          |   66.66 |      100 |      50 |   66.66 |
  config.js                         |   66.66 |      100 |      50 |   66.66 | 23
 db/models/postgres                 |   98.24 |    66.66 |     100 |   98.24 |
  company.js                        |     100 |      100 |     100 |     100 |
  company_point_of_sale.js          |     100 |      100 |     100 |     100 |
  index.js                          |      95 |    66.66 |     100 |      95 | 12
  point_of_sale.js                  |     100 |      100 |     100 |     100 |
  role.js                           |     100 |      100 |     100 |     100 |
  user_company_role.js              |     100 |      100 |     100 |     100 |
  users.js                          |     100 |      100 |     100 |     100 |
 domains/companies_domain/functions |   88.88 |      100 |      50 |   88.88 |
  FetchPointsOfSalesByCompany.js    |   88.88 |      100 |      50 |   88.88 | 4
 domains/users_domain/functions     |   82.85 |     87.5 |      50 |   82.85 |
  CreateUser.js                     |   80.76 |    83.33 |      50 |   80.76 | 38,61-66
  FetchUserByDocumentId.js          |   88.88 |      100 |      50 |   88.88 | 6
 routes/companies                   |     100 |      100 |     100 |     100 |
  index.js                          |     100 |      100 |     100 |     100 |
 routes/users                       |     100 |      100 |     100 |     100 |
  index.js                          |     100 |      100 |     100 |     100 |
 server                             |   86.79 |       25 |      40 |   88.46 |
  app.js                            |   86.79 |       25 |      40 |   88.46 | 73-78,85-90,95
 shared/functions                   |     100 |      100 |     100 |     100 |
  GetModelAttributes.js             |     100 |      100 |     100 |     100 |


## Documentacion

La documentación se realizo con swagger y openaApi v3. Se utilizo express-openapi-validator, para las validaciones de los request.

[Documentation](http://localhost:3000/api-docs)

## Variable global

La aplicación usa una unica variable global denominada DB, en la cual se guarda la instancia de la base de datos, no se aconseja el uso para ambientes productivos, y se hace en este caso para evitar el import en todo los archivos que se requiere, en vez de esto se debe propender el uso de patrones como inyección de dependencias.

## Authors

- [@juandevelop85](https://www.github.com/juandevelop85)

