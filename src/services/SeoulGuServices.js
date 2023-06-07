import { seoulGuModel } from '../models/SeoulGuModel.js';

class seoulGuService {
    //서울 자치구별 조도 평균수치 조회
    static async findAll(){
        const seoulGu = await seoulGuModel.getAll();

        if(!seoulGu) {
            const errorMessage = 'error 발생';
            return {errorMessage};
        }

        return seoulGu;
    }

}

export { seoulGuService };