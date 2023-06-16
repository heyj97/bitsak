import { InternalServerError } from "../error.js";
import { koreaDecadeModel } from "../models/koreaDecadeModel.js";

class koreaDecadeService {
  static async findAll() {
    try {
      const koreaDecade = await koreaDecadeModel.getAll();

      return {
        status: 200,
        data: koreaDecade,
      };
    } catch (error) {
      throw new InternalServerError(
        "대한민국의 10년간 빛공해 데이터를 불러오는 데 실패했습니다."
      );
    }
  }
}

export { koreaDecadeService };
