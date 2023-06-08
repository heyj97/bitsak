uploadRoutes
const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadController = require('../controllers/GalleryUploadController');
const fs = require('fs');
const path = require('path');

const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// // 사진 업로드를 처리할 미들웨어를 설정
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     // 파일명을 현재 시간으로 설정
//     const timestamp = Date.now();
//     const extension = file.originalname.split('.').pop();
//     cb(null, `${timestamp}.${extension}`);
//   }
// }); 뭔말...

const upload = multer({ storage });

// 갤러리 업로드 API를 정의
router.post('/gallery/upload', upload.single('photo'), GalleryUploadController.uploadGallery);

module.exports = router;