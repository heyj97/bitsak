import { groupRankModel } from '../models/groupRankModel.js';

class groupRankService {
    //그룹 랭킹 전체 조회
    static async findAll(){
        try {
            const groupRank = await groupRankModel.getAll();

            if(!groupRank) {
                return {
                    status: 400,
                    message: '데이터를 불러올 수 없습니다.',
                }
            }
            return {
                status: 200,
                data: groupRank
            };
        } catch (error) {
            return {
                status: 500,
                error: '서버 오류가 발생했습니다.',
            };
        }
    }
}

export { groupRankService };