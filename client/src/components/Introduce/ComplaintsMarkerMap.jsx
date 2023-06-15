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
import styles from "./Introduce.module.css";

const ComplaintsMarker = ({ complaint }) => {
  return (
    <Marker position={[complaint.latitude, complaint.longitude]}>
      <Popup>
        조도: {complaint.illuminance} <br />
        휘도: {complaint.luminance}
      </Popup>
    </Marker>
  );
};

const coordinatesToPolygon = (arr) => {
  return arr.map((item) => {
    return (
      <Polygon
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
        // onClick 예제
        // eventHandlers={{
        //   click: (e) => {
        //     alert(item.properties.EMD_KOR_NM + "이 클릭되었습니다.");
        //   },
        // }}
      >
        <Tooltip sticky>{item.properties.temp}</Tooltip>
      </Polygon>
    );
  });
};

const ComplaintsMarkerMap = () => {
  const position = [37.5833, 126.931557440644];
  const { data, isLoading, error } = useGetFetch("seodaemun-complaints");

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error} />;

  return (
    <div className={styles.globalLPChart}>
      <h2 className={styles.ChartTitle}>
        서대문구의{" "}
        <span className={styles.ChartTitleHightlight}>빛공해 관련민원</span>이
        가장 많이 발생한 곳은
        <br />
        <span className={styles.ChartTitleHightlight}>홍제동, 연희동</span>
        입니다.
      </h2>
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
        {coordinatesToPolygon(seodaemunData)}
        {data.data.length > 0 &&
          data.data.map((complaint, idx) => {
            return <ComplaintsMarker complaint={complaint} key={idx} />;
          })}
      </MapContainer>
      <p className={styles.ChartParagraph}>
        <a
          href="https://www.data.go.kr/data/15109204/fileData.do#/tab-layer-file"
          target="_blank"
        >
          공공데이터 포털 : 서울특별시 서대문구_빛 공해 민원지역 정밀계측
        </a>
        <br />
        <br />
        22년 7월 15일 부터 22년 7월 22일, 22년 11월 4일 부터 22년 11월 16일 동안
        <br />
        발생한 빛공해 관련 민원 총{" "}
        <span style={{ fontSize: "25px" }}>1548건</span>
      </p>
    </div>
  );
};

export default ComplaintsMarkerMap;
