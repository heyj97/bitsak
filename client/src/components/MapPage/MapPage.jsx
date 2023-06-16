/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import SideMenu from "./SideMenu.jsx";
import SeodaemunMap from "./SeodaemunMap.jsx";
import { useState } from "react";
import useGetFetch from "../../hooks/useGetFetch.jsx";
import Error from "../common/Error/Error.jsx";
import styles from "./MapPage.module.css";

const MapPage = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [location, setLocation] = useState("연희동");
  const { data, isLoading, error } = useGetFetch(
    `gallery/by-location/${location}`
  );

  // if (error) return <Error error={error} />;
  if (!error?.message === "Error: 404, Not Found")
    return <Error error={error} />;

  return (
    <>
      <div className={styles.MapPageContainer}>
        <SeodaemunMap
          setLocation={setLocation}
          setIsEdit={setIsEdit}
          setIsPost={setIsPost}
          setIsSelected={setIsSelected}
        />
        {(error?.message === "Error: 404, Not Found" || !error) &&
          !isLoading && (
            <SideMenu
              data={data.data}
              isEdit={isEdit}
              isPost={isPost}
              isSelected={isSelected}
              setIsEdit={setIsEdit}
              setIsPost={setIsPost}
              setIsSelected={setIsSelected}
            />
          )}
      </div>
    </>
  );
};

export default MapPage;
