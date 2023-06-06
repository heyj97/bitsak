// 담당: 정주현

import { useLocation } from "react-router-dom";
import AppRouter from "../AppRouter";
import Header from "./Header";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      {!isHome && <Header />}
      <AppRouter />
    </>
  );
};

export default Layout;
