import { config } from './config';
import { server } from './server';

start();
async function start () {

  server.listen(config.PORT, () => {
    // eslint-disable-next-line
    console.log('server listening on port: ', config.PORT);
  });
}