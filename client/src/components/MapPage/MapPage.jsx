import seodaemunData from "./seodaemunData.js";
import styles from "./MapPage.module.css";
import SideMenu from "./SideMenu.jsx";
import SeodaemunMap from "./SeodaemunMap.jsx";

const MapPage = () => {
  return (
    <>
      <div>
        <SeodaemunMap />
        <SideMenu />
      </div>
    </>
  );
};

export default MapPage;
