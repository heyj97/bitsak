import db from "../config/dbConfig.js";

// SQL query
// 서대문구 위치별 민원량 불러오기
// illuminance:조도, luminance:휘도
class sdmComplaintsModel {
  static async getAll() {
    const selectSdmComplaints =
      "SELECT minwon_id, latitude, longitude, illuminance, luminance \
             FROM minwon \
             WHERE luminance >= 3";

    const [rows] = await db.query(selectSdmComplaints);

    return rows;
  }
}

export { sdmComplaintsModel };
