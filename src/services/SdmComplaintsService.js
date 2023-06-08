import { sdmComplaintsModel } from '../models/SdmComplaintsModel.js';

class sdmComplaintsService {
    // 서대문구 위치별 민원량 조회
    static async findAll(){
        try {
            const sdmComplaints = await sdmComplaintsModel.getAll();

            if(!sdmComplaints) {
                return {
                    status: 404,
                    message: '데이터를 불러올 수 없습니다.',
                }
            }
            // 성공 시 응답 생성
            return {
                status: 200,
                data: sdmComplaints
            };
        } catch (error) {
            // 실패 시 응답 생성
            return {
                status: 500,
                error: '서버 오류가 발생했습니다.',
            };
        }
    }
}

export { sdmComplaintsService };