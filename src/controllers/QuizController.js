import { quizService } from '../services/QuizServices.js';

const quizController = async (req,res,next) => {
    try{
        const questions = await quizService.getQuestions();

        if (questions.errorMessage) {
            throw new Error(questions.errorMessage);
        } else {
            return res.status(200).json(questions);
        }
    }
    catch (error) {
        next(error);
    }
}

export { quizController };