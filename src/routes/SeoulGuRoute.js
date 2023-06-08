import { Router } from 'express';
import { seoulGuController } from '../controllers/SeoulGuController.js';

const seoulGuRouter = Router();


seoulGuRouter.get('/seoul-lightpollution', seoulGuController);

export { seoulGuRouter };