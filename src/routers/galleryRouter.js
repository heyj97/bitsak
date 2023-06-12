import { Router } from 'express';
import { uploadPhoto, updatePhoto, deletePhoto, getPhotosByLocation } from '../controllers/galleryController.js';
import uploadMiddleware from '../middlewares/uploadMiddleware.js';

const galleryRouter = Router();

galleryRouter.post('/api/gallery', uploadMiddleware, uploadPhoto);
galleryRouter.put('/api/gallery/:galleryId', updatePhoto);
galleryRouter.delete('/api/gallery/:galleryId', deletePhoto);
galleryRouter.get('/api/gallery/:location', getPhotosByLocation);

export { galleryRouter };