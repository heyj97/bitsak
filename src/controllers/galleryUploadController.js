import { galleryUploadService } from "../services/galleryUploadService.js";
import multer from 'multer';
import path from "path";
import fs from "fs";

const galleryUploadController = async (req, res, next) => {
  try {
    const currentDate = new Date();
    const filePath = req.file.path;

    const photoData = {
      author: req.body.author,
      description: req.body.description,
      location: req.body.location,
      take_date: req.body.take_date,
      post_date: currentDate,
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