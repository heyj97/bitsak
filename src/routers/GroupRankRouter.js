module.exports = app => {
    const GroupRank = require('../controllers/GroupRank.controllers');

    //랭킹 전체 조회
    app.get('/g20-rank', GroupRank.findAll);

};