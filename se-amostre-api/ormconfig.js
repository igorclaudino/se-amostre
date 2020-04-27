module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: ['src/app/entity/**/*.ts'],
  migrations: ['src/database/migration/**/*.ts'],
  subscribers: ['src/database/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/app/entity',
    migrationsDir: 'src/database/migration',
    subscribersDir: 'src/database/subscriber',
  },
};
