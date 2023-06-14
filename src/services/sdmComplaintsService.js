import { InternalServerError } from '../error.js';
import { sdmComplaintsModel } from '../models/sdmComplaintsModel.js';

class sdmComplaintsService {
    // 서대문구 위치별 민원량 조회
    static async findAll(){
        try {
            const sdmComplaints = await sdmComplaintsModel.getAll();
            // 성공 시 응답 생성
            return {
                status: 200,
                data: sdmComplaints
            };
        } catch (error) {
            throw new InternalServerError('서대문구 민원 계측 데이터를 조회하는 데 실패했습니다.')
            };
        }
}

export { sdmComplaintsService };