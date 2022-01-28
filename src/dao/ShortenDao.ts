import shortid from 'shortid';

import { Main } from '../Main';

export class ShortenDao {
  private get collection () {
    return Main.MongoClient.db('short-url').collection('shorten');
  }

  async insert (originalUrl: string) {
    const urlId = shortid.generate();
    await this.collection.insertOne({
      shortId: urlId,
      url: originalUrl,
    });
    return urlId;
  }

  async findByUrl (originalUrl: string) {
    const result = await this.collection.findOne({
      url: originalUrl,
    });

    return result;
  }

  async findById (shortId: string) {
    const result = await this.collection.findOne({
      shortId,
    });

    return result;
  }
}