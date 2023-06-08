import { galleryUploadModel } from '../models/GalleryUploadModel.js';

class galleryUploadService {
  static async uploadPhoto(photoData) {
    try {
      const galleryUpload = await galleryUploadModel.uploadPhoto(photoData);
      
      if(!galleryUpload) {
        return {
          status: 400,
          message: '사진을 업로드 할 수 없습니다.',
        }
      }
      return {
        status: 200,
        data: galleryUpload
      };
    } catch (error) {
      return {
        status: 500,
        error: '서버 오류가 발생했습니다.',
      };
    }
  }
}

export { galleryUploadService };