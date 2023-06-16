import { InternalServerError } from "../error.js";
import { groupRankModel } from "../models/groupRankModel.js";

class groupRankService {
  //그룹 랭킹 전체 조회
  static async findAll() {
    try {
      const groupRank = await groupRankModel.getAll();

      return {
        status: 200,
        data: groupRank,
      };
    } catch (error) {
      throw new InternalServerError(
        "G20 국가 빛공해 데이터를 불러오는 데 실패했습니다."
      );
    }
  }
}

export { groupRankService };
