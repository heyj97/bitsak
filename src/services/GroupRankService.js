import { GroupRank } from "../models/GroupRankModel.js";

// 그룹 랭킹 전체 조회
const getAllGroupRank = (callback) => {
    GroupRank.getAll((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  };
  
  const GroupRankService = {
    getAllGroupRank: getAllGroupRank,
  };
  
  export { GroupRankService };