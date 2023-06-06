const db = require('../config/dbConfig');


//생성자
const SeoulGu = function (seoulGu) {
  this.gu = seoulGu.gu;
  this.mean = seoulGu.mean;
};


//sql query
//서울 지역구별 조도 평균수치 불러오기 
SeoulGu.getAll = result => {
  sql.query('SELECT gu, mean FROM seoul-lightpollution', (err, res) => {
    if(err){
      console.log('error',err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

module.exports  = SeoulGu;