import path from "path";
import { galleryService } from "../services/galleryService.js";
import { BadRequestError } from "../error.js";

// 사진 업로드
async function uploadPhoto(req, res, next) {
  try {
    const filePath = req.file.path;
    const normalizedPath = path.normalize(filePath);
    const slashedPath = normalizedPath.replace(/\\/g, "/");
    if (!filePath) {
      throw new BadRequestError("파일 경로 값을 다시 확인해주세요.");
    }

    const photoData = {
      description: req.body.description,
      location: req.body.location,
      take_date: req.body.take_date,
      file_path: `/${slashedPath}`,
      password: req.body.password,
      username: req.body.username,
    };

    if (
      !photoData.description ||
      !photoData.location ||
      !photoData.take_date ||
      !photoData.password ||
      !photoData.username
    ) {
      throw new BadRequestError(
        "파일 요청 데이터의 타입과 컨텐츠를 다시 확인해주세요."
      );
    }

    //갤러리 업로드
    const galleryUpload = await galleryService.uploadPhoto(photoData);
    return res.status(200).send(galleryUpload);
  } catch (error) {
    next(error);
  }
}

// 사진 수정
async function updatePhoto(req, res, next) {
  try {
    const filePath = req.file.path;
    const normalizedPath = path.normalize(filePath);
    const slashedPath = normalizedPath.replace(/\\/g, "/");
    if (!filePath) {
      throw new BadRequestError("파일 경로 값을 다시 확인해주세요.");
    }

    const photoData = {
      galleryId: req.body.galleryId,
      description: req.body.description,
      location: req.body.location,
      take_date: req.body.take_date,
      file_path: `/${slashedPath}`,
      password: req.body.password,
    };

    if (!photoData) {
      throw new BadRequestError("요청 값을 다시 확인해주세요.");
    }

    //갤러리 수정
    const galleryUpdate = await galleryService.updatePhoto(photoData);
    return res.status(galleryUpdate.status).send(galleryUpdate);
  } catch (error) {
    next(error);
  }
}

    // 사진 삭제
    async function deletePhoto(req, res, next) {
        try {

            const {galleryId, password} = req.body;

            //게시물 삭제
            const galleryDelete = await galleryService.deletePhoto({galleryId, password});
            return res.status(galleryDelete.status).send(galleryDelete);
        } 
        catch (error) {
            next(error);
        }
    }


// 특정 location(동)의 사진 데이터 불러오기
async function getPhotosByLocation(req, res, next) {
  try {
    const location = req.params.location;

    const photosByLocation = await galleryService.getPhotosByLocation({
      location,
    });
    return res.status(photosByLocation.status).send(photosByLocation);
  } catch (error) {
    next(error);
  }
}

async function getCountByLocation(req, res, next) {
  try {
    const photoCounts = await galleryService.getCountByLocation();

    return res.status(photoCounts.status).send(photoCounts);
  } catch (error) {
    next(error);
  }
}

export {
  uploadPhoto,
  updatePhoto,
  deletePhoto,
  getPhotosByLocation,
  getCountByLocation,
};
