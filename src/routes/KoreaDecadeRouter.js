module.exports = app => {
    const KoreaDecade = require('../controllers/KoreaDecade.controllers');

    //한국 10년 추이 전체 조회
    app.get('/korea-lightpollution', KoreaDecade.findAll);


};