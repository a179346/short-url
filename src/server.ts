import express, { NextFunction, Request, Response } from 'express';
import http from 'http';
import cors from 'cors';

import { ApiError } from './lib/ApiError';
import { shortenRouter } from './routes/shortenRouter';
import { idRedirectRouter } from './routes/idRedirectRouter';

const app = express();
export const server = http.createServer(app);

app.enable('trust proxy');
app.use(cors());

app.get('/ok', (req, res) => { res.send('ok'); });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/shorten', shortenRouter);
app.use('/', idRedirectRouter);

app.use((req, res, next) => {
  if (res.apiResponse)
    res.status(res.apiResponse.statusCode).send(res.apiResponse.data);
  else
    next(new ApiError(404, 'not_found', 'not_found'));
});

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).send({
      code: err.code,
      message: err.message,
    });
    return;
  }
  if (err instanceof Error) {
    res.status(500).send({
      code: 'unknown_error',
      message: err.message,
    });
    return;
  }
  const respError = new ApiError(500, 'unknown_error', 'unknown_error');
  res.status(respError.statusCode).send({
    code: respError.code,
    message: respError.message,
  });
});