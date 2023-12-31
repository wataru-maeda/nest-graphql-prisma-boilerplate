export const loadConfig = () => ({
  env: process.env.NODE_ENV || 'production',
  port: parseInt(process.env.PORT, 10) || 8080,

  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});

export default loadConfig;
