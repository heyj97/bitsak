import { Router } from 'express';
import { quizController } from '../controllers/QuizController.js';

const QuizRouter = Router();


QuizRouter.get('/quiz', quizController);

export { QuizRouter };
