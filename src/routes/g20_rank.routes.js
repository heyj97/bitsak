module.exports = app => {
    const g20_rank = require('../controllers/g20_rank.controllers');

    //예시. 랭킹 불러오기
    app.get('/g20-rank', g20_rank.findById);


};