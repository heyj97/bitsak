import db from '../config/dbConfig.js';

// SQL query
// g20 국가 차트 불러오기
class groupRankModel {
    static async getAll() {
        const selectGroupRank = 'SELECT avg_mean, country, trend FROM g20_rank';
        const [rows] = await db.query(selectGroupRank);
        
        return rows;
    }
}
export { groupRankModel };
