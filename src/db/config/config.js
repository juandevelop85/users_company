module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'user_companies_develop',
    host: '127.0.0.1',
    dialect: 'postgres',
    define: {
      underscored: true,
      freezeTableName: false,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci',
        useNativeUUID: true,
      },
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      createdBy: 'created_by',
      updatedBy: 'updated_by',
    },
    logging: (message) => {
      console.log(message); // Utiliza tu función de registro aquí
    },
  },
  test: {
    username: 'root',
    password: null,
    database: 'user_companies_develop',
    host: '127.0.0.1',
    dialect: 'postgres',
    define: {
      underscored: true,
      freezeTableName: false,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci',
        useNativeUUID: true,
      },
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      createdBy: 'created_by',
      updatedBy: 'updated_by',
    },
    logging: (message) => {
      console.log(message); // Utiliza tu función de registro aquí
    },
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      useNativeUUID: true,
      // ssl: {
      //   require: true,
      //   rejectUnauthorized: true,
      //   ca: [process.env.CA_DATABASE],
      // },
    },
    define: {
      underscored: true,
      freezeTableName: true,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci',
      },
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      createdBy: 'created_by',
      updatedBy: 'updated_by',
    },
  },
};
