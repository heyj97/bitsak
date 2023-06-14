import { InternalServerError } from '../error.js';
import { seoulGuModel } from '../models/seoulGuModel.js';

class seoulGuService {
    static async findAll(){
        try {
            const seoulGu = await seoulGuModel.getAll();
        
            return {
                status: 200,
                data: seoulGu
            };
        } 
        catch (error) {
            throw new InternalServerError('서울시 조도 데이터를 조회하는 데 실패했습니다.');
        }
    }
}

export { seoulGuService };