import { Router } from 'express';
import { galleryUploadController } from '../controllers/GalleryUploadController.js';
import multer from 'multer';

const galleryUploadRouter = Router();
const upload = multer({ dest: 'uploads/' });

galleryUploadRouter.post('/gallery', upload.single('photo'), (req, res, next) => galleryUploadController(req, res, next));

export { galleryUploadRouter };