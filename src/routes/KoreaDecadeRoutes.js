import { Router } from 'express';
import { koreaDecadeController } from '../controllers/KoreaDecadeControllers.js';

const koreaDecadeRouter = Router();


koreaDecadeRouter.get('/korea-lightpollution', koreaDecadeController);

export { koreaDecadeRouter };