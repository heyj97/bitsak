import { sdmComplaintsModel } from '../models/SdmComplaintsModel.js';

class sdmComplaintsService {
    //서대문구 위치별 민원량 조회
    static async findAll(){
        const sdmComplaints = await sdmComplaintsModel.getAll();

        if(!sdmComplaints) {
            const errorMessage = 'error 발생';
            return {errorMessage};
        }

        return sdmComplaints;
    }

}

export { sdmComplaintsService };