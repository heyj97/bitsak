import path from 'path';
import { gallery_Service } from "../services/gallery_service.js";
import { BadRequestError } from '../error.js';


// 사진 업로드
async function uploadPhoto(req, res, next) {

    const filePath = req.file.path;
    if (!filePath) {
        throw new BadRequestError('파일 경로 값을 다시 확인해주세요.');
    }

    const photoData = {
        description: req.body.description,
        location: req.body.location,
        take_date: req.body.take_date,
        file_path: `/${filePath}`,
        password: req.body.password,
        username: req.body.username,
    };

    if(!photoData.description || !photoData.location || !photoData.take_date || !photoData.password || !photoData.username) {
        throw new BadRequestError('파일 요청 데이터의 타입과 컨텐츠를 다시 확인해주세요.');
    }

    try {
        //갤러리 업로드
        const galleryUpload = await gallery_Service.uploadPhoto(photoData);
        return res.status(200).send(galleryUpload);
    } 
    catch (error) {
        next(error);
    }
}

// 사진 수정
async function updatePhoto(req, res, next) {

    const filePath = req.file.path;
    if (!filePath) {
        throw BadRequestError('BadRequestError','파일 경로 값을 다시 확인해주세요.');
    }

    const photoData = {
        galleryId: req.body.galleryId,
        description: req.body.description,
        location: req.body.location,
        take_date: req.body.take_date,
        file_path : `/${filePath}`,
        password: req.body.password,
    };
    console.log(photoData.file_path);
    if(!photoData){
        throw new BadRequestError('요청 값을 다시 확인해주세요.');
    }

    try {
        //갤러리 수정
        const galleryUpdate = await gallery_Service.updatePhoto(photoData);
        return res.status(galleryUpdate.status).send(galleryUpdate);
    } 
    catch (error) {
        next(error);
    }
}

    // 사진 삭제
    async function deletePhoto(req, res, next) {

        const galleryId = req.body.galleryId;
        const password = req.body.password;

        try {
            //게시물 삭제
            const galleryDelete = await gallery_Service.deletePhoto({galleryId, password});
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
