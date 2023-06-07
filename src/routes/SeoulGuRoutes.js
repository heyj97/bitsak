import { Router } from 'express';
import { seoulGuController } from '../controllers/SeoulGuControllers.js';

const seoulGuRouter = Router();


seoulGuRouter.get('/seoul-lightpollution', seoulGuController);

export { seoulGuRouter };