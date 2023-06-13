import { Router } from 'express';
import { uploadPhoto, updatePhoto, deletePhoto, getPhotosByLocation } from '../controllers/galleryController.js';
import uploadMiddleware from '../middlewares/uploadMiddleware.js';
import { loginMiddleware } from '../middlewares/loginMiddleware.js';

const galleryRouter = Router();

galleryRouter.post('/api/gallery', uploadMiddleware, uploadPhoto);
galleryRouter.put('/api/gallery/:id/:galleryId', loginMiddleware, updatePhoto);
galleryRouter.delete('/api/gallery/:id/:galleryId', loginMiddleware, deletePhoto);
galleryRouter.get('/api/gallery/:location', getPhotosByLocation);

export { galleryRouter };