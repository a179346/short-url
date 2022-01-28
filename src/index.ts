import { config } from './config';
import { Main } from './Main';
import { server } from './server';

start();
async function start () {
  await Main.MongoClient.connect();
  // eslint-disable-next-line
  console.log('Connected successfully to mongodb!');

  server.listen(config.PORT, () => {
    // eslint-disable-next-line
    console.log('Server listening on port: ' + config.PORT);
  });
}