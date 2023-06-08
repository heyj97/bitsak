import db from '../config/dbConfig.js';

  // SQL query
  // 서대문구 위치별 민원량 불러오기
  // illuminance:조도, luminance:휘도
  class sdmComplaintsModel {
    static async getAll() {
      return new Promise((resolve, reject) => {
        db.query('SELECT id, latitude, longitude, illuminance, luminance FROM minwon', (err, res) => {
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
export { sdmComplaintsModel };