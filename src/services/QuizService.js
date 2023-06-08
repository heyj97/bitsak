import { quizModel } from '../models/QuizModel.js';

class quizService {
    // 질문 5개씩 랜덤으로 불러오기
    static async getQuestions(){
        const questions = await quizModel.getQuestions();

        //데이터가 없을 때
        if(!questions) {
            const errorMessage = '해당하는 데이터가 없습니다.';
            return {errorMessage};
        }

        return questions;
    }

}

export { quizService };