/* eslint-disable react/no-unescaped-entities */
// 담당: 정주현

import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Introduce from "./Introduce/Introduce";
import MapPage from "./MapPage/MapPage";
import Quiz from "./Quiz/Quiz";
import QuizResult from "./Quiz/QuizResult";
import QuizHome from "./Quiz/QuizHome";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/introduce" element={<Introduce />} />
      <Route path="/quiz-home" element={<QuizHome />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/quiz-result" element={<QuizResult />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="*" element={<div>There's nothing here!</div>} />
    </Routes>
  );
};

export default AppRouter;
