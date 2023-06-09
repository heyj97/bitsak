import { koreaDecadeService } from "../services/koreaDecadeService.js";

const koreaDecadeController = async (req,res,next) => {
    try{
        const koreaDecade = await koreaDecadeService.findAll();

        if (koreaDecade.errorMessage) {
            throw new Error(koreaDecade.errorMessage);
        } else {
            return res.status(200).json(koreaDecade);
        }
    }
    catch (error) {
        next(error);
    }
}

export { koreaDecadeController }