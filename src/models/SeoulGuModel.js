import db from '../config/dbConfig.js';

  // SQL query
  // 서울 자치구별 조도 평균수치 불러오기
  class seoulGuModel {
    static async getAll() {
      return new Promise((resolve, reject) => {
        db.query('SELECT gu, illum_mean FROM seoul_data_gu', (err, res) => {
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
export { seoulGuModel };