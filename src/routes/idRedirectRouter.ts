import { Router } from 'express';
import { ApiError } from '../lib/ApiError';
import { Main } from '../Main';

export const idRedirectRouter = Router();

idRedirectRouter.get('/:id', async function (req, res, next) {
  try {
    const id = req.params.id;
    if (!id)
      throw new ApiError(404, 'not_found', 'not_found');

    const dbData = await Main.Dao.ShortenDao.findById(id);
    if (!dbData)
      throw new ApiError(200, 'not_found', `id:"${id}" not found`);

    res.redirect(dbData.url);
  } catch (error) {
    next(error);
  }
});