import { MongoClient } from 'mongodb';
import { config } from './config';
import { ShortenDao } from './dao/ShortenDao';

export const Main = {
  MongoClient: new MongoClient(config.MONGO_CLIENT_URL, {
    maxPoolSize: 10,
    minPoolSize: 0,
  }),

  Dao: {
    ShortenDao: new ShortenDao(),
  },
};