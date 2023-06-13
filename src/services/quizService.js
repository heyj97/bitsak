import { quizModel } from "../models/quizModel.js";

class quizService {
  //질문 5개 랜덤으로 불러오기
  static async getQuestions() {
    try {
      const questions = await quizModel.getQuestions();

      if (!questions) {
        return {
          status: 400,
          message: "데이터를 불러올 수 없습니다.",
        };
      }
      return {
        status: 200,
        data: questions,
      };
    } catch (error) {
      return {
        status: 500,
        error: "서버 오류가 발생했습니다.",
      };
    }
  }
}

export { quizService };
