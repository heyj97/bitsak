import { seoulGuService } from "../services/seoulGuService.js";

const seoulGuController = async (req,res,next) => {
    try{
        const seoulGu = await seoulGuService.findAll();

        if (seoulGu.errorMessage) {
            throw new Error(seoulGu.errorMessage);
        } else {
            return res.status(200).json(seoulGu);
        }
    }
    catch (error) {
        next(error);
    }
}

export { seoulGuController };