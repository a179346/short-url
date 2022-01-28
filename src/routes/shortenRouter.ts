import { Router } from 'express';

import { shortenV1Router } from './shorten/shortenV1Router';

export const shortenRouter = Router();

shortenRouter.use('/v1', shortenV1Router);