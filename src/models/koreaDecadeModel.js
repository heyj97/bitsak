import db from "../config/dbConfig.js";

// SQL query
// 한국 빛공해 10년 추이 데이터 불러오기
class koreaDecadeModel {
  static async getAll() {
    const selectKoreaDecade =
      "SELECT year, mean, sum FROM korea_lightpollution";
    const [rows] = await db.query(selectKoreaDecade);

    return rows;
  }
}

export { koreaDecadeModel };
