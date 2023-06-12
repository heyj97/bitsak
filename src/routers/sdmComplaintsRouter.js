import { Router } from 'express';
import { sdmComplaintsController } from '../controllers/sdmComplaintsController.js';

const sdmComplaintsRouter = Router();


sdmComplaintsRouter.get('/api/seodaemun-complaints', sdmComplaintsController);

export { sdmComplaintsRouter };