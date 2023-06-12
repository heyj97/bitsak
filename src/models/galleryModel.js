import db from '../config/dbConfig.js';

// 사진 업로드, DB에 사진 정보 저장
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

  
  // 사진 수정
  static async updatePhoto(photoData) {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE gallery SET author = ?, description = ?, location = ?, take_date = ? WHERE gallery_id = ?',
        [photoData.author, photoData.description, photoData.location, photoData.take_date, photoData.galleryId],
        (err, res) => {
          if (err) {
            console.log('error', err);
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }


  // 사진 삭제
  static async deletePhoto(photoId) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM gallery WHERE gallery_id = ?', [photoId], (err, res) => {
        if (err) {
          console.log('error', err);
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }


  // 특정 location(동)의 사진 데이터 불러오기
  static async getPhotosByLocation(location) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM gallery WHERE location = ?', [location], (err, res) => {
        if (err) {
          console.log('error', err);
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }


  static async getPhotosById(galleryId) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM gallery WHERE gallery_id = ?', [galleryId], (err, res) => {
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