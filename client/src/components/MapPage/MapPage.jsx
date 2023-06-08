/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// 작업자 : 김한빈
//import geojson from "./seodaemungu.geojson";
import styles from "./MapPage.module.css";
import { useEffect } from 'react';

const MapPage = () => {
    
    useEffect( ()=> {

        //지도화면 set -----------------------------
        // var data = geojson.features;
        // var coordinates = []; //좌표 저장 배열
        // var name = ""; //행정구 이름
        // var polygons = [];
        
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도 생성 시 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.5807597279754, 126.931557440644),
            level: 6
        };
        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        
        //지도마커 set -----------------------------
        var content = document.getElementById('marker');
        var position = new kakao.maps.LatLng(37.5807597279754, 126.931557440644); //마커가 표시 될 위치
        var customOverlay = new kakao.maps.CustomOverlay({
            position: position,
            content: content,
            xAnchor: 0.3,
            yAnchor: 0.91
        });
        customOverlay.setMap(map); //마커가 지도 위에 표시되도록 설정
        //marker.setMap(null); //마커 제거 코드

    }, [])
    
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