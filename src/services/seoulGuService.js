import { seoulGuModel } from '../models/seoulGuModel.js';

class seoulGuService {
    static async findAll(){
        try {
            const seoulGu = await seoulGuModel.getAll();
            
            if(!seoulGu) {
                return {
                    status: 400,
                    message: '데이터를 불러올 수 없습니다.',
                }
            }
            return {
                status: 200,
                data: seoulGu
            };
        } catch (error) {
            return {
                status: 500,
                error: '서버 오류가 발생했습니다.',
            };
        }
    }
}

export { seoulGuService };
//주석ㅎㅎ