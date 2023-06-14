import db from '../config/dbConfig.js';

// SQL query
// g20 국가 차트 불러오기
class groupRankModel {
  static async getAll() {
    return new Promise((resolve, reject) => {
      db.query('SELECT avg_mean, country, trend FROM g20_rank', (err, res) => {
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
export { groupRankModel };
