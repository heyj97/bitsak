import { galleryService } from "../services/galleryService.js";
import path from "path";
import fs from "fs";

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 사진 업로드
async function uploadPhoto(req, res, next) {
  try {
    const filePath = req.file.path;
    const currentDate = new Date();

    const photoData = {
      author: req.body.author,
      description: req.body.description,
      location: req.body.location,
      take_date: req.body.take_date,
      post_date: currentDate,
      file_path: `/${filePath}`,
    };

    const galleryUpload = await galleryService.uploadPhoto(photoData);

    return res.status(200).send(galleryUpload);
  } catch (error) {
    next(error);
  }
}

// 사진 수정
async function updatePhoto(req, res, next) {
  try {
    const photoData = {
      author: req.body.author,
      description: req.body.description,
      location: req.body.location,
      take_date: req.body.take_date,
      galleryId: req.params.gallery_id,
    };

    const galleryUpdate = await galleryService.updatePhoto(photoData);

    return res.status(galleryUpdate.status).send(galleryUpdate);
  } catch (error) {
    next(error);
  }
}

// 사진 삭제
async function deletePhoto(req, res, next) {
  try {
    const galleryId = req.params.galleryId;
    // Database에서 photo 정보를 불러옵니다.
    const photoData = await galleryService.getPhotosById(galleryId);
    const filePath = photoData.data[0].file_path;
    const rootDir = path.join(__dirname, '..', '..'); // root
    const absoluteFilePath = path.join(rootDir, filePath); // root/uploads/...
    const standardizedPath = path.normalize(absoluteFilePath);

    const galleryDelete = await galleryService.deletePhoto(galleryId);

          // // 파일 시스템에서 photo를 삭제합니다.
          fs.unlink(`${standardizedPath}`, (err) => {
            if (err) {
              console.error(`Failed to delete file: ${err}`);
              return;
            }
          });
        
    return res.status(galleryDelete.status).send(galleryDelete);
  } catch (error) {
    next(error);
  }
}

// 특정 location(동)의 사진 데이터 불러오기
async function getPhotosByLocation(req, res, next) {
  try {
    const location = req.params.location;

    const photosByLocation = await galleryService.getPhotosByLocation(location);

    return res.status(photosByLocation.status).send(photosByLocation);
  } catch (error) {
    next(error);
  }
}

export { uploadPhoto, updatePhoto, deletePhoto, getPhotosByLocation };
