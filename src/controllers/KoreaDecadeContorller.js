const KoreaDecade = require('../models/KoreaDecade.model');

//대한민국 10년간 빛공해 추이 조회
exports.findAll = (req, res) => {
    let result = new Map();

    KoreaDecade.getAll((err, data) => {
        if (err){
            res.status(500).send({
                message:
                    err.message || "차트를 불러오지 못했습니다."
            });
        } else { 
            const year = data.year;
            const mean = data.mean;
            const sum = data.sum;

            result.set('year',year);
            result.set('mean', mean);
            result.set('sum',sum);

            res.status(200).send(data); 
        }
    })
}