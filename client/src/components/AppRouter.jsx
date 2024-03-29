/* eslint-disable react/no-unescaped-entities */
// 담당: 정주현

import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Homepage from "./Homepage/Homepage";
import Spinner from "./common/Spinner/Spinner";
import Test from "./Test/Test";
import ModiTest from "./Test/ModiTest";

const Introduce = lazy(() => import("./Introduce/Introduce"));
const MapPage = lazy(() => import("./MapPage/MapPage"));
const SideMenuFeed = lazy(() => import("./MapPage/SideMenuFeed"));
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
        <Route exact path="/" element={<Homepage />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/map-item" element={<SideMenuFeed />} />
        <Route path="/test" element={<Test />} />
        <Route path="/moditest" element={<ModiTest />} />
        <Route path="*" element={<div>There's nothing here!</div>} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
