const db = require('../config/dbConfig');


//생성자
const KoreaDecade = function (koreaDecade) {
  this.year = koreaDecade.year;
  this.mean = koreaDecade.mean;
  this.sum = koreaDecade.sum;
};


//sql query
//대한민국 10년간 빛공해 추이 불러오기
KoreaDecade.getAll = result => {
  sql.query('SELECT year, mean, sum FROM korea-lightpollution', (err, res) => {
    if(err){
      console.log('error',err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

module.exports  = KoreaDecade;