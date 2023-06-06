module.exports = app => {
    const SeoulGu = require('../controllers/SeoulGu.controllers');

    //전체 조회
    app.get('/seoul-lightpollution', SeoulGu.findAll);


};