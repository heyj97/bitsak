const connection = require('../config/dbConfig');

// 갤러리 모델 생성
class Gallery {
  constructor(data) {
    this.author = data.author;
    this.description = data.description;
    this.location = data.location;
    this.take_date = data.take_date;
    this.post_date = data.post_date;
    this.photo = data.photo;
  }

  // 갤러리 업로드 메서드
  upload() {
    const { author, description, location, take_date, post_date, photo } = this;
    
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO gallery (author, description, location, take_date, post_date, photo) VALUES (?, ?, ?, ?, ?, ?)';
      const values = [author, description, location, take_date, post_date, photo];
      connection.query(sql, values, (err, result) => {
        if (err) {
          console.error('갤러리 업로드에 실패했습니다.', err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = Gallery;