/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// 작업자 : 김한빈
import geojson from "./SIG.json";
import styles from "./MapPage.module.css";
import { useEffect } from 'react';

const MapPage = () => {
    
    useEffect( ()=> {

        //화면좌표 set -----------------------------
        const { kakao } = window;

        var data = geojson.features;
        var coordinates = []; //좌표 저장 배열
        var name = ""; //행정구 이름
        var polygons = [];
        
        //지도화면 set -----------------------------
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도 생성 시 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.5807597279754, 126.931557440644),
            level: 6
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        
        //지도마커 set -----------------------------
        const content = document.getElementById('marker');
        const position = new kakao.maps.LatLng(37.5807597279754, 126.931557440644); //마커가 표시 될 위치
        const customOverlay = new kakao.maps.CustomOverlay({
            position: position,
            content: content,
            xAnchor: 0.3,
            yAnchor: 0.91
        });
        
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
            path: path, //그려질 다각형의 좌표 배열
            strokeWeight: 2, //선의 두께
            strokeColor: '#004c80', //선의 색깔
            strokeOpacity: 0.8, //선의 불투명도
            strokeStyle: 'solid', //선의 스타일
            fillColor: '#fff', //채우기 색깔
            fillOpacity: 0.7, //채우기 불투명도
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

           kakao.maps.event.addListener(polygon, 'click', function(mouseEvnet){
            const content = 
            '<div style="padding:2px;"><p><b>' +
            name +
            '</b></p><p>이산화질소농도: ' +
            areaResult[1] +
            '</p><p>오존농도: ' +
            areaResult[2] +
            '</p><p>일산화탄소농도: ' +
            areaResult[3] +
            '</div>';

            infowindow.setContent(content);
            infowindow.setPosition(mouseEvent.latLng);
            infowindow.setMap(map);
           });

        };

        data.forEach((val) => {
            coordinates = val.geometry.coordinates;
            name = val.properties.SIG_KOR_NM;

            displayArea(coordinates, name);
        });

    }, []);
    
    return (
        <div>
            <div id="map" className={styles.Map}>지도화면</div>
            <div id="marker">
                <div className={styles.overlaybox}>
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
                </div>
            </div>
        </div>

    )
}

export default MapPage;