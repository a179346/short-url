/* eslint @typescript-eslint/no-var-requires: 0 */
import dotenv from 'dotenv';
dotenv.config();

// server listen port
process.env.PORT = process.env.PORT || '3100';
process.env.MONGO_CLIENT_URL = process.env.MONGO_CLIENT_URL || 'mongodb://localhost:27017';

export const config = {
  PORT: process.env.PORT,
  MONGO_CLIENT_URL: process.env.MONGO_CLIENT_URL,
};

Object.freeze(config);