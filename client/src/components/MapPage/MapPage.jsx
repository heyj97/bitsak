/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import SideMenu from "./SideMenu.jsx";
import SeodaemunMap from "./SeodaemunMap.jsx";
import { useState } from "react";
import useGetFetch from "../../hooks/useGetFetch.jsx";
import Error from "../common/Error/Error.jsx";

const MapPage = () => {
  const [location, setLocation] = useState("연희동");
  const { data, isLoading, error } = useGetFetch(
    `gallery/by-location/${location}`
  );

  // if (error) return <Error error={error} />;
  if (!error?.message === "Error: 404, Not Found") return <Error error={error} />;

  return (
    <>
      <div>
        <SeodaemunMap setLocation={setLocation} />
        {((error?.message === "Error: 404, Not Found") || !error) && !isLoading && <SideMenu data={data.data} />}
        {(error?.message === "Error: 404, Not Found")&& !isLoading && <SideMenu data={data.data} />}
      </div>
    </>
  );
};

export default MapPage;
