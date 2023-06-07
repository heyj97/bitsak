import { Router } from 'express';
import { sdmComplaintsController } from '../controllers/SdmComplaintsControllers.js';

const sdmComplaintsRouter = Router();


sdmComplaintsRouter.get('/seodaemun-complaints', sdmComplaintsController);

export { sdmComplaintsRouter };