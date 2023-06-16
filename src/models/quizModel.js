import db from "../config/dbConfig.js";

//빛 공해 퀴즈
class quizModel {
  static async getQuestions() {
    const selectQuiz =
      "SELECT question_id, question, answer, explanation FROM quiz ORDER BY RAND() LIMIT 5";
    const [rows] = await db.query(selectQuiz);

    return rows;
  }
}

export { quizModel };
