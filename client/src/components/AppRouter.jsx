/* eslint-disable react/no-unescaped-entities */
// 담당: 정주현

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import Header from './Layout/Header';
import InforPage from './InforPage/InforPage';
import QuizePage from './QuizePage/QuizePage';
import MapPage from './MapPage/MapPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
          <Route exact element={<HomePage />} />
          <Route path="/infor" element={<InforPage />} />
          <Route path="/quize" element={<QuizePage />} />
          <Route path="/map" element={<MapPage />} />
        <Route path="*" element={<div>There's nothing here!</div>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;