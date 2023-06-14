import db from '../config/dbConfig.js';

class seoulGuModel {
  static async getAll() {

    const query = 'SELECT gu.gu_name, ia.illum_avg_id, ia.illum_avg FROM illum_avg ia JOIN gu ON gu.gu_id = ia.illum_avg_id';
    const [rows] = await db.query(query);
    
    return rows;
    }
}

export { seoulGuModel };