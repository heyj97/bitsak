const SeoulGu = require('../models/SeoulGu.model');

//그룹 랭킹 전체 조회
exports.findAll = (req, res) => {
    let result = new Map();

    SeoulGu.getAll((err, data) => {
        if (err){
            res.status(500).send({
                message:
                    err.message || "차트를 불러오지 못했습니다."
            });
        } else { 
            const gu = data.gu;
            const mean = data.mean;

            result.set('gu',gu);
            result.set('mean', mean);

            res.status(200).send(data); 
        }
    })
}