import {
  MapContainer,
  TileLayer,
  Polygon,
  Tooltip,
  SVGOverlay,
  Circle,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import seodaemunData from "../MapPage/seodaemunData";
import useGetFetch from "../../hooks/useGetFetch";
import Spinner from "../common/Spinner/Spinner";
import Error from "../common/Error/Error";
import { circleCoordinates } from "./boundConstants";
import styles from "./MapPage.module.css";

const coordinatesToPolygon = (arr, setLocation) => {
  return arr.map((item, idx) => {
    return (
      <Polygon
        key={idx.toString()}
        interactive={true}
        pathOptions={{
          color: "#FFE600",
          fillColor: "#000237",
          fillOpacity: 1,
          weight: 1,
        }}
        positions={item.geometry.coordinates[0][0].map((coord) => [
          coord[1],
          coord[0],
        ])}
        eventHandlers={{
          click: (e) => {
            setLocation(item.properties.temp);
          },
        }}
      >
        <Tooltip sticky>{item.properties.temp}</Tooltip>
      </Polygon>
    );
  });
};

const PostNumberCircle = ({ data, bounds, postCount, name }) => {
  // data.data 배열에서 item.location === name인 첫 번째 item을 찾습니다.
  const matchedItem = data.data.find((item) => item.location === name);

  // matchedItem이 있으면 그 count를 반환하고, 없으면 postCount를 반환합니다.
  const count = matchedItem ? matchedItem.count : postCount;

  return (
    <SVGOverlay attributes={{ stroke: "#FFE600" }} bounds={bounds}>
      <text
        x="50%"
        y="50%"
        stroke="#FFE600"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {count}
      </text>
    </SVGOverlay>
  );
};

const SeodaemunMap = ({ setLocation }) => {
  const position = [37.5833, 126.931557440644];
  const { data, isLoading, error } = useGetFetch("gallery/count-by-location");

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error.message} />;

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={position}
        zoom={14}
        style={{ height: "100%", width: "100%", backgroundColor: "white" }}
        dragging={false}
        zoomControl={false}
        touchZoom={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          opacity={0}
        />
        {coordinatesToPolygon(seodaemunData, setLocation)}
        {data &&
          circleCoordinates.map((item, idx) => {
            return (
              <PostNumberCircle
                bounds={item.bounds}
                postCount={item.count}
                name={item.name}
                data={data}
                key={idx.toString()}
              />
            );
          })}
      </MapContainer>
    </div>
  );
};

export default SeodaemunMap;
