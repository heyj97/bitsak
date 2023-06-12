import multer from 'multer';
import path from 'path';

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

const filter = (req, file, callback) => {
  const fileType = file.mimetype.split('/')[1];

  if (fileType === 'jpg' || fileType === 'jpeg' || fileType === 'png') {
    callback(null, true);
  } else {
    callback({ message: '지정된 확장자만 가능합니다. (jpg, jpeg, png)' }, false);
  }
};

const uploadMiddleware = multer({ storage: storage, fileFilter: filter }).single('file_path');


export default uploadMiddleware;