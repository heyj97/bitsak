import { koreaDecadeModel } from '../models/KoreaDecadeModel.js';

class koreaDecadeService {
    static async findAll(){
        try {
            const koreaDecade = await koreaDecadeModel.getAll();
            
            if(!koreaDecade) {
                return {
                    status: 400,
                    message: '데이터를 불러올 수 없습니다.',
                }
            }
            return {
                status: 200,
                data: koreaDecade
            };
        } catch (error) {
            return {
                status: 500,
                error: '서버 오류가 발생했습니다.',
            };
        }
    }
}

// class koreaDecadeService {
//     //한국 빛공해 10년 추이 데이터 조회
//     static async findAll(){
//         const koreaDecade = await koreaDecadeModel.getAll();

//         if(!koreaDecade) {
//             const errorMessage = 'error 발생';
//             return {errorMessage};
//         }

//         return koreaDecade;
//     }

// }

export { koreaDecadeService };