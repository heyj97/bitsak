<<<<<<< HEAD
const db = require('../config/dbConfig');


//생성자
const GroupRank = function (groupRank) {
  this.country = groupRank.country;
  this.avg_mean = groupRank.avg_mean;
  this.trend = groupRank.trend;
  //this.flag = g20_rank.flag;
};


//sql query
//g20 국가 차트 불러오기
GroupRank.getAll = result => {
  sql.query('SELECT avg_mean, country, trend FROM g20_rank', (err, res) => {
    if(err){
      console.log('error',err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

module.exports  = GroupRank;
=======
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
>>>>>>> f38771024a6ffc3699e1ecb3e758edf70e9ad8f3
