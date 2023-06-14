import { quizService } from '../services/quizService.js';

const quizController = async (req,res,next) => {
    try{
        const questions = await quizService.getQuestions();

        return res.status(200).json(questions);
    }
    catch (error) {
        next(error);
    }
}

export { quizController };