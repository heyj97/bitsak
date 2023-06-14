import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import seodaemunData from "../MapPage/seodaemunData";
import useGetFetch from "../../hooks/useGetFetch";
import Spinner from "../common/Spinner/Spinner";
import Error from "../common/Error/Error";

const ComplaintsMarker = ({ complaint }) => {
  return (
    <Marker position={[complaint.latitude, complaint.longitude]}>
      <Popup>
        휘도: {complaint.illuminance} <br />
        조도: {complaint.luminance}
      </Popup>
    </Marker>
  );
};

const coordinatesToPolygon = (arr) => {
  return arr.map((item) => {
    // map 함수의 결과를 반환합니다.
    return (
      <Polygon
        pathOptions={{
          color: "#FFE600",
          fillColor: "#000237",
          fillOpacity: 1,
          weight: 1,
        }}
        positions={item.geometry.coordinates[0].map((coord) => [
          coord[1],
          coord[0],
        ])}
        // onClick 예제
        // eventHandlers={{
        //   click: (e) => {
        //     alert(item.properties.EMD_KOR_NM + "이 클릭되었습니다.");
        //   },
        // }}
      >
        <Tooltip sticky>{item.properties.EMD_KOR_NM}</Tooltip>
      </Polygon>
    );
  });
};

const ComplaintsMarkerMap = () => {
  const position = [37.5835, 126.931557440644];
  const { data, isLoading, error } = useGetFetch("seodaemun-complaints");

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error} />;

  return (
    <MapContainer
      center={position}
      zoom={14}
      style={{ height: "800px", width: "900px", backgroundColor: "white" }}
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
      {coordinatesToPolygon(seodaemunData.features)}
      {data.data.length > 0 &&
        data.data.map((complaint, idx) => {
          return <ComplaintsMarker complaint={complaint} key={idx} />;
        })}

      <Marker position={[37.5835, 126.931557440644]}>
        <Popup>testtest</Popup>
      </Marker>
    </MapContainer>
  );
};

export default ComplaintsMarkerMap;
