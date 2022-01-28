import { Router } from 'express';
import { ConstraintBuilder, Validax, ValidaxSchema } from 'validax';

import { ApiError } from '../../lib/ApiError';
import { Main } from '../../Main';
import { ApiResponse } from '../../lib/ApiResponse';
import { Lib } from '../../lib/Lib';

export const shortenV1Router = Router();

@ValidaxSchema()
class ShortenV1Body {
  @ConstraintBuilder.String({ minLength: 1 }).Decorator()
    url!: string;
}

shortenV1Router.post('/', async function (req, res, next) {
  try {
    const body = req.body;
    if (!Validax.validate(body, ShortenV1Body))
      throw new ApiError(400, 'wrong_parameter', 'Please input url.');

    const isUrlExist = await Lib.isUrlExist(body.url);
    if (!isUrlExist)
      throw new ApiError(400, 'wrong_parameter', 'Invalid url.');

    const dbData = await Main.Dao.ShortenDao.findByUrl(body.url);
    let id = dbData?.shortId.toString();
    if (!id)
      id = await Main.Dao.ShortenDao.insert(body.url);

    res.apiResponse = new ApiResponse(200, {
      id,
    });

    next();
  } catch (error) {
    next(error);
  }
});