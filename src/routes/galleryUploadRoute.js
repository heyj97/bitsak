import { Router } from 'express';
import { galleryUploadController } from '../controllers/galleryUploadController.js';
import multer from 'multer';

const galleryUploadRouter = Router();

const upload = multer({ dest: 'uploads/' }).single('filePath');

galleryUploadRouter.post('/gallery', upload, galleryUploadController);

export { galleryUploadRouter };