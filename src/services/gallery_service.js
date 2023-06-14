import path from "path";
import fs from "fs";
import bcrypt from 'bcrypt';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { gallery_Model } from '../models/gallery_model.js';
import { InternalServerError } from "../error.js";
import { galleryService } from "./galleryService.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


class gallery_Service {

  static async uploadPhoto({username, description, location, take_date, file_path, password}) {
    try {

      const post_date = new Date();

      // 비밀번호 해쉬화
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);

      
      //갤러리 DB 저장
      await gallery_Model.uploadPhoto({username, description, location,take_date, post_date, file_path, password:hashedPassword});

      return {
        status: 200,
        data: {username, description, location, take_date,post_date, file_path, password},
        message: "사진을 업로드 하였습니다.",
      };
    } catch (error) {
      throw error;
    }
  }


  static async updatePhoto(photoData) {
    try {
      const galleryUpdate = await gallery_Model.updatePhoto(photoData);

      if (!galleryUpdate) {
        return {
          status: 404,
          message: '사진을 찾을 수 없습니다.',
        };
      }
      return {
        status: 200,
        data: photoData,
      };
    } catch (error) {
      return {
        status: 500,
        error: '서버 오류가 발생했습니다.',
      };
    }
  }


  // static async getPassword({galleryId}) {
  //   try{
  //     
  //     return password;
  //   }
  //   catch(err) {
  //     throw err;
  //   }
  // }

  static async deletePhoto({galleryId,password}) {

    const correctPasswordHash = await gallery_Model.getPassword({galleryId});

      // 비밀번호 일치 여부 확인
      //const correctPasswordHash = await gallery_service.getPassword(galleryId);
      const isPasswordCorrect = await bcrypt.compare(password, correctPasswordHash);

      if (!isPasswordCorrect) {
        const errorMessage =
          '비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.';
        return res.status(401).send({ errorMessage });
     }


      // Database에서 photo 정보를 불러옵니다.
    const photoData = await gallery_Model.getPhotosById({galleryId});
    const filePath = photoData.data[0].file_path;
    const rootDir = path.join(__dirname, '..', '..'); // root
    const absoluteFilePath = path.join(rootDir, filePath); // root/uploads/...
    const standardizedPath = path.normalize(absoluteFilePath);


    try {
      await gallery_Model.deletePhoto({photoId});

       // 파일 시스템에서 photo를 삭제합니다.
    fs.unlink(`${standardizedPath}`, (err) => {
        if (err) {
            console.error(`Failed to delete file: ${err}`);
            return;
        }
    });

      return {
        status: 200,
        message: '사진을 삭제했습니다.',
      };
    } 
    catch (error) {
      throw new InternalServerError('사진을 삭제하는 데 실패했습니다.');
    }
    
  }


  static async getPhotosByLocation(location) {
    try {
      const photos = await gallery_Model.getPhotosByLocation(location);
  
      return {
        status: 200,
        data: photos,
      };
    } 
    catch (error) {
        throw new InternalServerError('${location}의 갤러리를 조회하는 데 실패했습니다.');
    }
  }

  static async getCountByLocation() {
    try {
      const photoCounts = await gallery_Model.getCountByLocation();
  
      return {
        status: 200,
        data: photoCounts,
      };
    } catch (error) {
        throw new InternalServerError('서대문구의 갤러리 데이터를 조회하는 데 실패했습니다.');
    }
  }
  

  static async getPhotosById(galleryId) {
    try {
      const photos = await gallery_Model.getPhotosById(galleryId);

      return {
        status: 200,
        data: photos,
      };
    } catch (error) {
        throw new InternalServerError('갤러리 조회 실패.');
    }
  }

}

export { gallery_Service };
