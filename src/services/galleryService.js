import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { galleryModel } from '../models/galleryModel.js';

class galleryService {

  static async uploadPhoto(photoData) {
    try {

      const post_date = new Date();

      // 비밀번호 해쉬화
      const hashedPassword = await bcrypt.hash(photoData.password, 10);
      console.log(hashedPassword);

      const newPhotoInfo = { 
        description: photoData.description,
        location: photoData.location,
        take_date: photoData.take_date,
        post_date: post_date,
        file_path: photoData.file_path,
        password: hashedPassword,
        username: photoData.username,
      }
      
      //갤러리 DB 저장
      const galleryUpload = await galleryModel.uploadPhoto(newPhotoInfo);

    
      if (!galleryUpload) {
        return {
          status: 400,
          message: '사진을 업로드 할 수 없습니다.',
        };
      }
      return {
        status: 200,
        data: newPhotoInfo,
        message: "사진을 업로드 하였습니다.",
      };
    } catch (error) {
      throw error;
    }
  }


  static async updatePhoto(photoData) {
    try {
      const galleryUpdate = await galleryModel.updatePhoto(photoData);

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


  static async getPassword(galleryId) {
    try{
      const password = await galleryModel.getPassword(galleryId);

      return password;
    }
    catch(err) {
      throw err;
    }
  }

  static async deletePhoto(photoId) {
    try {
      const galleryDelete = await galleryModel.deletePhoto(photoId);

      // if (!galleryDelete) {
      //   throw error(new )
      // }

      return {
        status: 200,
        message: '사진을 삭제했습니다.',
      };
    } catch (error) {
      return {
        status: 500,
        error: '서버 오류가 발생했습니다.',
      };
    }
  }

//getPhotosById 만들기..
  static async getPhotosByLocation(location) {
    try {
      const photos = await galleryModel.getPhotosByLocation(location);
  
      if (!photos || photos.length === 0) {
        return {
          status: 404,
          message: '해당 위치의 사진을 찾을 수 없습니다.',
        };
      }
  
      return {
        status: 200,
        data: photos,
      };
    } catch (error) {
      return {
        status: 500,
        error: '서버 오류가 발생했습니다.',
      };
    }
  }

  static async getCountByLocation() {
    try {
      const photoCounts = await galleryModel.getCountByLocation();
  
      if (!photoCounts || photoCounts.length === 0) {
        return {
          status: 404,
          message: '사진 데이터 개수를 가져올 수 없습니다.',
        };
      }
  
      return {
        status: 200,
        data: photoCounts,
      };
    } catch (error) {
      return {
        status: 500,
        error: '서버 오류가 발생했습니다.',
      };
    }
  }
  
static async getPhotosById(galleryId) {
  try {
    const photos = await galleryModel.getPhotosById(galleryId);

    if (!photos || photos.length === 0) {
      return {
        status: 404,
        message: '해당 사진을 찾을 수 없습니다.',
      };
    }

    return {
      status: 200,
      data: photos,
    };
  } catch (error) {
    return {
      status: 500,
      error: '서버 오류가 발생했습니다.',
    };
  }
}

}
export { galleryService };