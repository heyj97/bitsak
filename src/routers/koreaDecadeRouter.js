import { Router } from "express";
import { koreaDecadeController } from "../controllers/koreaDecadeController.js";

const koreaDecadeRouter = Router();

koreaDecadeRouter.get("/api/korea-lightpollution", koreaDecadeController);

export { koreaDecadeRouter };
