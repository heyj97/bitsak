import { Router } from 'express';
import { groupRankController } from '../controllers/groupRankController.js';

const groupRankRouter = Router();


groupRankRouter.get('/g20-rank', groupRankController);

export { groupRankRouter };