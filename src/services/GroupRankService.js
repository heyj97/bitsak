import {groupRankModel} from '../models/GroupRankModel.js';

class groupRankService {
    //그룹 랭킹 전체 조회
    static async findAll(){
        const groupRank = await groupRankModel.getAll();

        if(!groupRank) {
            const errorMessage = 'error 발생';
            return {errorMessage};
        }

        return groupRank;
    }

}

export { groupRankService };