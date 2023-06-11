import db from '../config/dbConfig.js';

// 사진 업로드 로직, DB에 사진 정보 저장
class galleryModel {
  static async uploadPhoto(photoData) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO gallery (author, description, location, take_date, post_date, file_path) VALUES (?, ?, ?, ?, ?, ?)',
      [photoData.author, photoData.description, photoData.location, photoData.take_date, photoData.post_date, photoData.file_path],
      (err, res) => {
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

export { galleryModel };