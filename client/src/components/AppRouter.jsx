// 담당: 정주현

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage/Homepage";
import Quiz from "./Quiz/Quiz";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="*" element={<div>404 Error</div>} /> {/* 404페이지 추가*/}
      </Routes>
    </Router>
  );
};

export default AppRouter;
