import { Router } from 'express';
import { galleryUploadController } from '../controllers/galleryUploadController.js';
import multer from 'multer';
import path from 'path';

const galleryUploadRouter = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // 파일이 저장될 경로 설정
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext); // 파일 이름 설정
    }
  });  

const upload = multer({ dest: 'uploads/' }).single('file_path');

galleryUploadRouter.post('/gallery', upload, galleryUploadController);

export { galleryUploadRouter };