import { Router } from 'express';
import { uploadPhoto, updatePhoto, deletePhoto, getPhotosByLocation, getCountByLocation } from '../controllers/gallery_controller.js';
import uploadMiddleware from '../middlewares/uploadMiddleware.js';

const galleryRouter = Router();

galleryRouter.post('/api/gallery', uploadMiddleware, uploadPhoto);
galleryRouter.put('/api/gallery/:galleryId', updatePhoto);
galleryRouter.delete('/api/gallery/:galleryId', deletePhoto);
galleryRouter.get('/api/gallery/by-location/:location', getPhotosByLocation);
galleryRouter.get('/api/gallery/count-by-location', getCountByLocation);


export { galleryRouter };
