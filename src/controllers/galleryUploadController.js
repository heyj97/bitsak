import { galleryUploadService } from "../services/galleryUploadService.js";
import multer from 'multer';
import path from "path";
import fs from "fs";

const galleryUploadController = async (req, res, next) => {
  try {
    const filePath = req.file.path;

    // const photoData = new Map();

    // photoData.set('author', req.body.author);
    // photoData.set('description', req.body.description);
    // photoData.set('location',req.body.location);
    // photoData.set('take_date', req.body.take_date);
    // photoData.set('file_path', filePath);
    const photoData = {
      author: req.body.author,
      description: req.body.description,
      location: req.body.location,
      take_date: req.body.take_date,
      file_path: filePath,
    };
    

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

export { galleryUploadController };