import axios from 'axios';

async function isUrlExist (url:string) {
  try {
    const res = await axios({
      url,
      method: 'HEAD',
      timeout: 3000,
    });

    return (/4\d\d/.test(res.status.toString()) === false);
  } catch (error) {
    return false;
  }
}

export const Lib = {
  isUrlExist,
};