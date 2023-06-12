import { Router } from 'express';
import { galleryController } from '../controllers/galleryController.js';
import uploadMiddleware from '../middlewares/uploadMiddleware.js';

const galleryRouter = Router();


galleryRouter.post('/gallery', uploadMiddleware, galleryController);
galleryRouter.put('/gallery/:galleryId', galleryController);
galleryRouter.delete('/gallery/:galleryId', galleryController);

export { galleryRouter };