import { galleryUploadService } from "../services/GalleryUploadService.js";
import multer from 'multer';
import path from "path";
import fs from "fs";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     const filename = `${path.basename(file.originalname, ext)}_${Date.now()}${ext}`;
//     cb(null, filename);
//   }
// });

// const upload = multer({ storage });

// const galleryUploadController = async (req, res, next) => {
//   try {
//     const { filename, filePath } = req.file;

//     const galleryUpload = await galleryUploadService.uploadPhoto(filePath);

//     fs.unlinkSync(filePath);

//     if (galleryUpload.errorMessage) {
//       throw new Error(galleryUpload.errorMessage);
//     } else {
//       return res.status(200).json(galleryUpload);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

const galleryUploadController = async (req, res, next) => {
  try {
    //  const { filename, filePath } = req.file;
    const filePath = req.file.path;

    const photoData = new Map();

    photoData.set('author', req.body.author);
    photoData.set('description', req.body.description);
    photoData.set('location',req.body.location);
    photoData.set('take_date', req.body.take_date);
    photoData.set('filepath', filePath);
    

    const galleryUpload = await galleryUploadService.uploadPhoto(photoData);

    fs.unlinkSync(filePath);

    if (galleryUpload.errorMessage) {
      throw new Error(galleryUpload.errorMessage);
    } else {
      return res.status(200).send(galleryUpload);

    }
  } catch (error) {
    next(error);
  }
};

export { galleryUploadController }