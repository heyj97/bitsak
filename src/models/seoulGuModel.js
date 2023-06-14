import db from '../config/dbConfig.js';

  // SQL query
  // 서울 자치구별 조도 평균수치 불러오기
class seoulGuModel {
  static async getAll() {
    return new Promise((resolve, reject) => {
      db.query('SELECT gu.gu_name, ia.illum_avg_id, ia.illum_avg FROM illum_avg ia JOIN gu ON gu.gu_id = ia.illum_avg_id',
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

export { seoulGuModel };