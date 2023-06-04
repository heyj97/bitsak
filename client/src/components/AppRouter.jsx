// 담당: 정주현

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
