import { koreaDecadeModel } from '../models/KoreaDecadeModel.js';

class koreaDecadeService {
    //한국 빛공해 10년 추이 데이터 조회
    static async findAll(){
        const koreaDecade = await koreaDecadeModel.getAll();

        if(!koreaDecade) {
            const errorMessage = 'error 발생';
            return {errorMessage};
        }

        return koreaDecade;
    }

}

export { koreaDecadeService };