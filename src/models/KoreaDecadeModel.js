import db from '../config/dbConfig.js';

  // SQL query
  // 한국 빛공해 10년 추이 데이터 불러오기
  class koreaDecadeModel {
    static async getAll() {
      return new Promise((resolve, reject) => {
        db.query('SELECT year, mean, sum FROM korea_lightpollution', (err, res) => {
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
export { koreaDecadeModel };