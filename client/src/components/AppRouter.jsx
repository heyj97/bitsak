/* eslint-disable react/no-unescaped-entities */
// 담당: 정주현

import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import HomePage from "./HomePage/HomePage";
import Spinner from "./common/Spinner/Spinner";

const Introduce = lazy(() => import("./Introduce/Introduce"));
const MapPage = lazy(() => import("./MapPage/MapPage"));
const Quiz = lazy(() => import("./Quiz/Quiz"));

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Spinner />
        </div>
      }
    >
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="*" element={<div>There's nothing here!</div>} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
