import path from "path";
import fs from "fs";
import bcrypt from 'bcrypt';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { galleryModel } from '../models/galleryModel.js';
import { CustomError, InternalServerError, NotFoundError } from "../error.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


class galleryService {

    //1. 갤러리 업로드
    static async uploadPhoto({username, description, location, take_date, file_path, password}) {

        const post_date = new Date();

        // 비밀번호 해쉬화
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            //갤러리 DB 저장
            await galleryModel.uploadPhoto({username, description, location,take_date, post_date, file_path, password:hashedPassword});

            return {
                status: 200,
                message: "사진을 업로드 하였습니다.",
            };
        } 
        catch (error) {
            throw new InternalServerError('게시물을 등록하는 데 실패하였습니다.');
        }
    }
    
    //2. 갤러리 수정 
    static async updatePhoto({galleryId, description, location, take_date, file_path, password}) {

        //galleryId 가 DB에 존재하는지 확인
        const isGalleryId = await galleryModel.getGalleryId({galleryId});
        if (!isGalleryId || isGalleryId === 0) {
            throw new NotFoundError('존재하지 않는 파일입니다.');
        }
      
        //DB에 저장된 비밀번호 가져오기
        const correctPasswordHash = await galleryModel.getPassword({galleryId});
    
        // 비밀번호 일치 여부 확인
        const isPasswordCorrect = await bcrypt.compare(password, correctPasswordHash.password);
        if (!isPasswordCorrect) {
            throw new CustomError('비밀번호가 일치하지 않습니다.', 401);
        }

        //update전 file_path 를 따로 저장하는 로직
        const getFilePath = await galleryModel.getPhotosById({galleryId});
        const oldFilePath = getFilePath.file_path;
        const rootDir = path.join(__dirname, '..', '..'); // root

        const absoluteFilePath = path.join(rootDir, oldFilePath); // root/uploads/...
        const standardizedPath = path.normalize(absoluteFilePath);

        //파일 존재 여부 확인
        fs.access(`${standardizedPath}`, fs.constants.F_OK, (accessErr) => {
            if (accessErr) {
              console.error(`File does not exist: ${oldFilePath}`);
              return;
            }
        });
        
        try {
            //update
            await galleryModel.updatePhoto({galleryId, description, location, take_date, file_path});

            if ( oldFilePath != String(file_path)){
                // 파일 시스템에서 photo를 삭제합니다.

                fs.unlink(`${standardizedPath}`, (err) => {
                    if (err) {
                        console.error(`Failed to delete file: ${err}`);
                        return;
                    }
                });
            }

            return {
                status: 200,
                message: "게시물이 수정되었습니다.",
            };

        } 
        catch (error) {
            throw new InternalServerError('게시물을 수정하는 데 실패했습니다.');
        }
    }


    //3. 갤러리 삭제
    static async deletePhoto({galleryId, password}) {

    //galleryId 가 DB에 존재하는지 확인
    const isGalleryId = await galleryModel.getGalleryId({galleryId});
    if (!isGalleryId || isGalleryId === 0) {
        throw new NotFoundError('존재하지 않는 파일입니다.');
    }

    const correctPasswordHash = await galleryModel.getPassword({galleryId});
    
      // 비밀번호 일치 여부 확인
      const isPasswordCorrect = await bcrypt.compare(password, correctPasswordHash.password);

      if (!isPasswordCorrect) {
        throw new CustomError('비밀번호가 일치하지 않습니다.', 401);
    }

      // Database에서 photo 정보를 불러옵니다.
    const photoData = await galleryModel.getPhotosById({galleryId});
    const filePath = photoData.file_path;
    const rootDir = path.join(__dirname, '..', '..'); // root

    const absoluteFilePath = path.join(rootDir, filePath); // root/uploads/...
    const standardizedPath = path.normalize(absoluteFilePath);
    

    try {
      await galleryModel.deletePhoto({galleryId});

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


    //4. 행정동 데이터 가져오기
    static async getPhotosByLocation({location}) {

        //해당 location이 DB에 존재하는지 체크
        const getLocation = await galleryModel.getLocation({location});
        if (getLocation.count === 0) {
            throw new NotFoundError('해당 위치에는 데이터가 존재하지 않습니다.');
        }
    
        try {
        const photos = await galleryModel.getPhotosByLocation({location});

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
      const photoCounts = await galleryModel.getCountByLocation();
  
      return {
        status: 200,
        data: photoCounts,
      };
    } catch (error) {
        throw new InternalServerError('서대문구의 갤러리 데이터를 조회하는 데 실패했습니다.');
    }
  }

}

export { galleryService };
