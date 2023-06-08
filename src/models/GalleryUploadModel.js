import db from '../config/dbConfig.js';

// 사진 업로드 로직, DB에 사진 정보 저장
// 아직 DB.....
class galleryUploadModel {
  static async uploadPhoto(photoData) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO gallery (photo_data~~) VALUES (?)', [photoData], (err, res) => {
        if (err) {
          console.log('error', err);
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
}

export { galleryUploadModel };
