
# Prueba (usuarios y compañias)

Api para consultar usuarios, compañias y puntos de venta, y los roles de cada usuario en las compañias.


## Correr localmente

Clonar el proyecto

```bash
  git clone https://link-to-project
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
    
## Documentacion

La documentación se realizo con swagger y openaApi v3. Se utilizo express-openapi-validator, para las validaciones de los request.

[Documentation](http://localhost:3000/api-docs)

## Authors

- [@juandevelop85](https://www.github.com/juandevelop85)

