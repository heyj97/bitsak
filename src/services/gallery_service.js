import path from "path";
import fs from "fs";
import bcrypt from 'bcrypt';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { gallery_Model } from '../models/gallery_model.js';
import { CustomError, InternalServerError } from "../error.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


class gallery_Service {

    //1. 갤러리 업로드
    static async uploadPhoto({username, description, location, take_date, file_path, password}) {

        const post_date = new Date();

        // 비밀번호 해쉬화
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            //갤러리 DB 저장
            await gallery_Model.uploadPhoto({username, description, location,take_date, post_date, file_path, password:hashedPassword});

            return {
                status: 200,
                data: {username, description, location, take_date,post_date, file_path, password},
                message: "사진을 업로드 하였습니다.",
            };
        } 
        catch (error) {
            throw new InternalServerError('게시물을 등록하는 데 실패하였습니다.');
        }
    }
    
    //2. 갤러리 수정 
    static async updatePhoto({galleryId, description, location, take_date, file_path, password}) {
        
        //DB에 저장된 비밀번호 가져오기
        const correctPasswordHash = await gallery_Model.getPassword({galleryId});
    

        // 비밀번호 일치 여부 확인
        const isPasswordCorrect = await bcrypt.compare(password, correctPasswordHash.password);
        if (!isPasswordCorrect) {
            throw new CustomError('비밀번호가 일치하지 않습니다.', 401);
        }

        try {
            //update
            await gallery_Model.updatePhoto({galleryId, description, location, take_date, file_path});

            return {
                status: 200,
                data: {galleryId, description, location, take_date, file_path},
                message: "게시물이 수정되었습니다.",
            };

        } 
        catch (error) {
            throw new InternalServerError('게시물을 수정하는 데 실패했습니다.');
        }
    }


  static async deletePhoto({galleryId, password}) {

    const correctPasswordHash = await gallery_Model.getPassword({galleryId});
    
      // 비밀번호 일치 여부 확인
      const isPasswordCorrect = await bcrypt.compare(password, correctPasswordHash.password);

      if (!isPasswordCorrect) {
        throw new CustomError('비밀번호가 일치하지 않습니다.', 401);
    }

      // Database에서 photo 정보를 불러옵니다.
    const photoData = await gallery_Model.getPhotosById({galleryId});
    const filePath = photoData.file_path;
    const rootDir = path.join(__dirname, '..', '..'); // root

    const absoluteFilePath = path.join(rootDir, filePath); // root/uploads/...
    const standardizedPath = path.normalize(absoluteFilePath);
    

    try {
      await gallery_Model.deletePhoto({galleryId});

       // 파일 시스템에서 photo를 삭제합니다.
    fs.unlink(`${standardizedPath}`, (err) => {
        if (err) {
            console.error(`Failed to delete file: ${err}`);
            return;
        }
    });

      return {
        status: 200,
        message: '게시물이 삭제되었습니다.',
      };
    } 
    catch (error) {
      throw new InternalServerError('사진을 삭제하는 데 실패했습니다.');
    }
    
  }


  static async getPhotosByLocation({location}) {
    try {
      const photos = await gallery_Model.getPhotosByLocation({location});
  
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
