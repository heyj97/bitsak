import path from 'path';
import { gallery_Service } from "../services/gallery_service.js";


// 사진 업로드
async function uploadPhoto(req, res, next) {
  try {

    const filePath = req.file.path;
  

    const photoData = {
      description: req.body.description,
      location: req.body.location,
      take_date: req.body.take_date,
      //post_date: currentDate,
      file_path: `/${filePath}`,
      password: req.body.password,
      username: req.body.username,
    };

    const galleryUpload = await gallery_Service.uploadPhoto(photoData);

    return res.status(200).send(galleryUpload);
  } catch (error) {
    next(error);
  }
}

// 사진 수정
async function updatePhoto(req, res, next) {
  try {

    //username, password 일치 확인
    

    const photoData = {
      description: req.body.description,
      location: req.body.location,
      take_date: req.body.take_date,
      file_path: req.file.path,
      galleryId: req.params.galleryId,
    };

    const galleryUpdate = await gallery_Service.updatePhoto(photoData);

    return res.status(galleryUpdate.status).send(galleryUpdate);
  } catch (error) {
    next(error);
  }
}

// 사진 삭제
async function deletePhoto(req, res, next) {
  try {
    const galleryId = parseInt(req.params.galleryId);
    console.log(typeof(galleryId));
    const password = req.body.password;
    

    const galleryDelete = await gallery_Service.deletePhoto({galleryId, password});
        
    return res.status(galleryDelete.status).send(galleryDelete);
  } catch (error) {
    next(error);
  }
}


// 특정 location(동)의 사진 데이터 불러오기
async function getPhotosByLocation(req, res, next) {
  try {
    const location = req.params.location;

    const photosByLocation = await gallery_Service.getPhotosByLocation(location);

    return res.status(photosByLocation.status).send(photosByLocation);
  } catch (error) {
    next(error);
  }

}


async function getCountByLocation(req, res, next) {
  try {
    const photoCounts = await gallery_Service.getCountByLocation();

    return res.status(photoCounts.status).send(photoCounts);
  } catch (error) {
    next(error);
  }
}


export { uploadPhoto, updatePhoto, deletePhoto, getPhotosByLocation, getCountByLocation };
