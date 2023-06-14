import { InternalServerError } from "../error.js";
import { quizModel } from "../models/quizModel.js";

class quizService {
    //질문 5개 랜덤으로 불러오기
    static async getQuestions() {
        try {
            //퀴즈 불러오기
            const questions = await quizModel.getQuestions();
            return {
                status: 200,
                data: questions
            };
        } 
        catch (error) {
            throw new InternalServerError('퀴즈 페이지를 불러오는 데 실패했습니다.')
        }
      }
}

export { quizService };
