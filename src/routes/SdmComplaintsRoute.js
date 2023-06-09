import { Router } from 'express';
import { sdmComplaintsController } from '../controllers/SdmComplaintsController.js';

const sdmComplaintsRouter = Router();


sdmComplaintsRouter.get('/seodaemun-complaints', sdmComplaintsController);

export { sdmComplaintsRouter };