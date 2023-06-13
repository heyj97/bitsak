/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// 작업자 : 김한빈
import json from "./seodemunguMap.json";
import styles from "./MapPage.module.css";
import { useEffect, useRef } from 'react';

const MapPage = () => {

    useEffect( ()=> {

        //화면좌표 set -----------------------------
        const { kakao } = window;

        var data = json.features;
        var coordinates = []; //좌표 저장 배열
        var name = ""; //행정동 이름
        var polygons = [];
        
        //지도화면 set -----------------------------
        const mapRef = useRef();
        // const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도 생성 시 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.5807597279754, 126.931557440644),
            level: 6
        };
        const map = new kakao.maps.Map(mapRef.current, options); //지도 생성 및 객체 리턴
        
        //지도마커 set -----------------------------
        const markerRef = useRef();
        // const content = document.getElementById('marker');
        const position = new kakao.maps.LatLng(37.5807597279754, 126.931557440644); //마커가 표시 될 위치
        const customOverlay = new kakao.maps.CustomOverlay({
            position: position,
            content: content,
            xAnchor: 0.3,
            yAnchor: 0.91
        });

        // // 마커 클러스터러
        // const clusterer = new kakao.maps.MarkerClusterer({
        //     map: mal,
        //     averageCenter: true,
        //     minLevel: 9
        // });

        // // 데이터
        // $.get("./seodemunguMal.json", functon(data)){
        //     var markers = $(data.positions).map(function(i, position)){
        //         return new kakao.maps.Marker({
        //             position: new kakao.maps.LatLng(position.lat, position.lng)
        //         });
        //     };
        //     clusterer.addMarkers(markers);
        // };
        
        const infowindow = new kakao.maps.InfoWindow({ removable: true });
        customOverlay.setMap(map); //마커가 지도 위에 표시되도록 설정
        //marker.setMap(null); //마커 제거 코드

        //지도좌표설정심화 set-----------------------
        const displayArea = (coordinates, name) => {
           var path = [];
           var points = [];
           //var areaResult = pollution.filter((item)=> item[0] === name);
           //console.log(areaResult);
           
           coordinates[0].forEach((coordinate)=> {
            var point = {};
            point.x = coordinate[1];
            point.y = coordinate[0];
            points.push(point);
            path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
           });

           var polygon = new kakao.maps.Polygon({
            map: map,
            path: path, //다각형의 좌표 배열
            strokeWeight: 2, 
            strokeColor: '#004c80',
            strokeOpacity: 0.8, 
            strokeStyle: 'solid', 
            fillColor: '#fff',
            fillOpacity: 0.7,
           });

           polygons.push(polygon);

            // 다각형에 mouseover 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 변경합니다
            // 지역명을 표시하는 커스텀오버레이를 지도위에 표시합니다
           kakao.maps.event.addListener(polygon, 'mouseover', function(mouseEvent){
            polygon.setOptions({ fillColor: '#09f' });
            customOverlay.setContent('<div class="area">' + name + '</div>');
            customOverlay.setPosition(mouseEvent.latLng);
            customOverlay.setMap(map);
           });

           kakao.maps.event.addListener(polygon, 'mousemove', function(mouseEvent){
            customOverlay.setPosition(mouseEvent.latLng);
           });

           kakao.maps.event.addListener(polygon, 'mouseout', function(){
            polygon.setOptions({ fillColor: '#fff' });
            customOverlay.setMap(null);
           });

           kakao.maps.event.addListener(polygon, 'click', function(mouseEvent){
            const content = 
            '<div style="padding:2px;"></div>';

            infowindow.setContent(content);
            infowindow.setPosition(mouseEvent.latLng);
            infowindow.setMap(map);
           });

        };

        data.forEach((val) => {
            coordinates = val.geometry.coordinates;
            name = val.properties.EMD_KOR_NM;

            displayArea(coordinates, name);
        });

    }, []);
    
    return (
        <div>
            <div ref={mapRef} className={styles.Map}>지도화면</div>
            <div ref={markerRef}>
                {/* <div className={styles.overlaybox}>
                    <div className={styles.boxtitle}>빛공해 정보</div>
                    <div className={styles.first}>
                        <div className={styles.triangleText}>1</div>
                        <div className={styles.movietitleText}>서대문구 해당 주소</div>
                    </div>
                    <ul>
                        <li className={styles.up}>
                            <span className={styles.number}>1</span>
                            <span className={styles.title}>조도</span>
                            <span className={styles.arrowUp}></span>
                            <span className={styles.count}></span>
                        </li>
                        <li>
                            <span className={styles.number}>2</span>
                            <span className={styles.title}>휘도</span>
                            <span className={styles.arrowUp}></span>
                            <span className={styles.count}></span>
                        </li>
                        <li>
                            <span className={styles.number}>3</span>
                            <span className={styles.title}>광원</span>
                            <span className={styles.arrowUp}></span>
                            <span className={styles.count}></span>
                        </li>
                        <li>
                            <span className={styles.number}>4</span>
                            <span className={styles.title}>날짜</span>
                            <span className={styles.arrowDown}></span>
                            <span className={styles.count}></span>
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>

    )
}

export default MapPage;