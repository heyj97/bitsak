import styles from "./Layout.module.css";
import { Link } from "react-router-dom";
import RightNav from "./rightNav";

const Header = () => {
  return (
    <header>
      <nav className={styles.Nav}>
        <h1 className={styles.Logo}>
          <Link to={"/"}>빛삭</Link>
        </h1>
        <RightNav />
      </nav>
    </header>
  );
};

export default Header;
