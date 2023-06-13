import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { galleryModel } from '../models/galleryModel.js';

class galleryService {
  //user 생성
  // static async addUser({username, password}){
  //   try{
  //     const newUser = await galleryModel.addUser({username,password});

  //     if (!newUser) {
  //       return {
  //         status : 400,
  //         message: '사용자를 찾을 수 없습니다.',
  //       };
  //     }
  //     return {
  //       status: 200,
  //       data: newUser
  //     };
  //   }
  //   catch(error){
  //     return {
  //       status: 500,
  //       error: error
  //     };    
  //   }
  // }

  static async uploadPhoto(photoData) {
    try {

      const galleryUpload = await galleryModel.uploadPhoto(photoData);

      const data = {}
      data.galleryId = galleryUpload.insertId;

      // id 는 유니크 값 부여
      const id = uuidv4();
      data.id = id;
      //const addData = { id, galleryId};
      //await galleryModel.addId(addData)

      // 비밀번호 해쉬화
      //const hashedPassword = await bcrypt.hash(photoData.password, 10);


      //암호화 후 
      const password_jwt = process.env.JWT_SECRET_KEY || 'jwt-secret-key';
      const token = jwt.sign({ id : id }, password_jwt);

      data.token = token;
      
      if (!galleryUpload) {
        return {
          status: 400,
          message: '사진을 업로드 할 수 없습니다.',
        };
      }
      return {
        status: 200,
        data: data,
        message: "사진을 업로드 하였습니다.",
      };
    } catch (error) {
      return {
        status: 500,
        error: "서버 오류가 발생했습니다.",
      };
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
        data: galleryUpdate,
      };
    } catch (error) {
      return {
        status: 500,
        error: '서버 오류가 발생했습니다.',
      };
    }
  }


  static async deletePhoto(photoId) {
    try {
      const galleryDelete = await galleryModel.deletePhoto(photoId);

      if (!galleryDelete) {
        return {
          status: 404,
          message: '사진을 찾을 수 없습니다.',
        };
      }

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