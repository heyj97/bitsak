/* eslint-disable react/no-unescaped-entities */
// 담당: 정주현

import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import HomePage from "./HomePage/HomePage";

const Introduce = lazy(() => import("./Introduce/Introduce"));
const MapPage = lazy(() => import("./MapPage/MapPage"));
const Quiz = lazy(() => import("./Quiz/Quiz"));

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route
        path="/introduce"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Introduce />
          </Suspense>
        }
      />
      <Route
        path="/quiz"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Quiz />
          </Suspense>
        }
      />
      <Route
        path="/map"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <MapPage />
          </Suspense>
        }
      />
      <Route path="*" element={<div>There's nothing here!</div>} />
    </Routes>
  );
};

export default AppRouter;
