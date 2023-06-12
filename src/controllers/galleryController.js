import { galleryService } from "../services/galleryService.js";
import path from "path";
import fs from "fs";

const galleryController = async (req, res, next) => {
  try {
    const filePath = req.file.path;
    const currentDate = new Date();

    if (req.method === 'POST') {
      const photoData = {
        author: req.body.author,
        description: req.body.description,
        location: req.body.location,
        take_date: req.body.take_date,
        post_date: currentDate,
        file_path: filePath,
      };


      const galleryUpload = await galleryService.uploadPhoto(photoData);

      return res.status(200).send(galleryUpload);
    } else if (req.method === 'PUT') {
      const photoData = {
        author: req.body.author,
        description: req.body.description,
        location: req.body.location,
        take_date: req.body.take_date,
        galleryId: req.params.gallery_id,
      };


      const galleryUpdate = await galleryService.updatePhoto(photoData);

      return res.status(galleryUpdate.status).send(galleryUpdate);
    } else if (req.method === 'DELETE') {
      const galleryId = req.params.gallery_id;


      const galleryDelete = await galleryService.deletePhoto(galleryId);

      return res.status(galleryDelete.status).send(galleryDelete);
    }
    
  } catch (error) {
    next(error);
  }
};

export { galleryController };
