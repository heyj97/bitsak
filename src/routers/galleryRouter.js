import { Router } from "express";
import {
  uploadPhoto,
  updatePhoto,
  deletePhoto,
  getPhotosByLocation,
  getCountByLocation,
} from "../controllers/galleryController.js";
import { uploadMiddleware } from "../middlewares/uploadMiddleware.js";

const galleryRouter = Router();

galleryRouter.post("/api/gallery", uploadMiddleware, uploadPhoto);
galleryRouter.put("/api/gallery", uploadMiddleware, updatePhoto);
galleryRouter.post("/api/gallery/delete", deletePhoto);
galleryRouter.get("/api/gallery/by-location/:location", getPhotosByLocation);
galleryRouter.get("/api/gallery/count-by-location", getCountByLocation);

export { galleryRouter };
