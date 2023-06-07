import { sdmComplaintsService } from "../services/SdmComplaintsServices.js";

const sdmComplaintsController = async (req,res,next) => {
    try{
        const sdmComplaints = await sdmComplaintsService.findAll();

        if (sdmComplaints.errorMessage) {
            throw new Error(sdmComplaints.errorMessage);
        } else {
            return res.status(200).json(sdmComplaints);
        }
    }
    catch (error) {
        next(error);
    }
}

export { sdmComplaintsController }