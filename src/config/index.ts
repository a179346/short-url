/* eslint @typescript-eslint/no-var-requires: 0 */
import dotenv from 'dotenv';
dotenv.config();

// server listen port
process.env.PORT = process.env.PORT || '3100';

export const config = {
  PORT: process.env.PORT,
};

Object.freeze(config);