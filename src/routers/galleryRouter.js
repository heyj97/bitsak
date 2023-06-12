import { Router } from 'express';
import { galleryController } from '../controllers/galleryController.js';
import uploadMiddleware from '../middlewares/uploadMiddleware.js';

const galleryRouter = Router();


galleryRouter.post('/api/gallery', uploadMiddleware, galleryController);
galleryRouter.put('/api/gallery/:galleryId', galleryController);
galleryRouter.delete('/api/gallery/:galleryId', galleryController);

export { galleryRouter };