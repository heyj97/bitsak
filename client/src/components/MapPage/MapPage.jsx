/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// 작업자 : 김한빈
import seodaemunData from "./seodaemunData.js";
import styles from "./MapPage.module.css";
import { useEffect, useMemo } from "react";

const MapPage = () => {
  useEffect(() => {
    //화면좌표 set -----------------------------
    const { kakao } = window;

    var data = seodaemunData.features;
    var coordinates = []; //좌표 저장 배열

    //지도화면 set -----------------------------
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도 생성 시 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.583, 126.931557440644),
      level: 6,
      scrollwheel: false,
      draggable: false,
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    //지도좌표설정심화 set-----------------------
    const displayArea = (coordinates) => {
      var linePath = []; // 선분
      var points = []; // 꼭짓점

      coordinates.forEach((coordinate) => {
        var point = { y: coordinate[1], x: coordinate[0] };
        points.push(point);
        linePath.push(new kakao.maps.LatLng(point.y, point.x));
      });
      return linePath;
    };

    data.forEach((val) => {
      coordinates = val.geometry.coordinates[0];
      let linePath = displayArea(coordinates);
      let polygon = new kakao.maps.Polygon({
        path: linePath, //다각형의 좌표 배열
        strokeWeight: 2,
        strokeColor: "#004c80",
        strokeOpacity: 1,
        strokeStyle: "solid",
        fillColor: "#fff",
        fillOpacity: 1,
      });
      polygon.setMap(map);
    });
  }, []);

  return (
    <div>
      <div id="map" className={styles.Map}></div>
      지도화면
      <div id="content"></div>
    </div>
  );
};

export default MapPage;
