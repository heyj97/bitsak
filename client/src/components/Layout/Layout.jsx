// 담당: 정주현

import { useLocation } from "react-router-dom";
import AppRouter from "../AppRouter";
import Header from "./Header";
import { useMemo } from "react";

const Layout = () => {
  const location = useLocation();
  const isHome = useMemo(() => location.pathname === "/", [location]);
  return (
    <>
      {!isHome && <Header />}
      <AppRouter />
    </>
  );
};

export default Layout;
