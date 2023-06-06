const GroupRank = require('../models/GroupRank.model');

//그룹 랭킹 전체 조회
exports.findAll = (req, res) => {
    let result = new Map();

    GroupRank.getAll((err, data) => {
        if (err){
            res.status(500).send({
                message:
                    err.message || "차트를 불러오지 못했습니다."
            });
        } else { 
            const country = data.country;
            const avg_mean = data.avg_mean;
            const trend = data.trend;

            result.set('country',country);
            result.set('avg_mean', avg_mean);
            result.set('trend', trend);

            result.set('isSuccess', true);
            res.status(200).send(data); 
        }
    })
}