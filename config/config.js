import dotenv from 'dotenv';
dotenv.config();

const config = {
  development : {
      username : process.env.DB_USERNAME || 'root',
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE || 'test',
      host : process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT,
      dialect : "mysql"
  }
};

export default config;