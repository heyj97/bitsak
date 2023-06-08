import db from '../config/dbConfig.js';

  //빛 공해 퀴즈
  class quizModel {
    static async getQuestions() {
      return new Promise((resolve, reject) => {
        db.query('SELECT question,answer,explanation FROM quiz ORDER BY RAND() LIMIT 5', (err, res) => {
          if (err) {
            console.log('error', err);
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
      
    }
}
export { quizModel };
