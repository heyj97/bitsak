# 빛삭 (readme)

### 💫 개요

- 서비스명: 빛삭
- 팀명: 라이트형제
- 주제: 빛공해(light pollution)
- 기획 기간: 2023.05.29 ~ 2022.06.02
- 개발 기간: 2023.06.03 ~ 2023.06.16
- 목표: 객관적 수치를 활용해 **서울 서대문구 빛공해 현황 가시화 및 사진 공유, 자가진단 퀴즈를 통한 심각성 인지**
- API 문서: 바로가기
- 테스트 페이지: 바로가기

## ⚡️기술 스택

### 💫 개발 언어

- HTML
- CSS
- JavaScript

### 💫 Front-End

- Vite(React.js)
- Axios
- Chart.js

### 💫 Back-End

- JavaScript
- Node.js
- express.js

## 💫 DataBase

- MySQL
- AWS RDS

### 💫 Data Analysis

- Numpy
- Pandas
- Matplotlib
- Seaborn
- Folium

## ⚡️빛삭 서비스 소개

🌟 **빛삭이란?**

**빛공해에 대한 정보를 전달**하고 **심각성을 인지**시키는 웹 서비스 입니다.
서울 서대문구의 빛공해 현황을 시각화하여 사용자에게 빛공해 정보(조도, 민원 데이터)를 전달하고, 사용자가 체감할 수 있게 빛공해 사진을 공유하며, 빛공해 관련 자가진단 퀴즈로 심각성을 인지할 수 있습니다.

🌟 **기획 배경**

과도한 빛은 단순히 천체 관측과 야간 경관 방해 뿐 아니라 생태계 교란을 일으켜 생물 다양성을 감소 시키며, 인간에게는 수면장애, 눈부심을 유발해 건강에 악영향을 미칩니다. 또한 실외 인공 조명 설치, 운영 과정에서 온실가스 방출로 지구 온난화에 일조합니다.

대한민국은 특히 빛공해에 대한 심각성 인지가 부족합니다.
해외의 경우 중대 공해로 인식해 조명 규격 관련 법안이 마련되어 있습니다.

G20 국가 중 대한민국의 빛공해 데이터, 서울시의 빛공해 현황 데이터, 서대문구의 조도 및 민원 데이터를 분석, 가시화하여 심각성을 표현했습니다.

## ⚡️ 빛삭의 주요 기능

🌟 빛공해 인식 관련 자가진단 테스트

→ OX 퀴즈를 활용하여 빛공해 인식 정도 자가진단

🌟 빛공해 관련 수치 시각화

- 한국 내 빛공해 연도별(2012-2022) 증가 그래프
- 서울시 구별 조도 그래프
- 서대문구 빛공해 민원 발생 지도

🌟 빛공해 민원 키워드 분석 시각화 (word cloud)

🌟사용자 - 빛공해 사진 업로드 (지도에 표시)

→ 빛공해를 사용자가 체감할 수 있는 사진을 업로드, 지도 표시 기능

## ⚡️ 멤버 역할

| 이름      | 역할                          |
| --------- | ----------------------------- |
| 정주현 🐮 | 팀장, 프론트엔드, 데이터 분석 |
| 김한빈 🐯 | 프론트엔드, 데이터 분석       |
| 장나연 🐰 | 백엔드, 데이터 분석           |
| 윤혜원 🐹 | 백엔드, 데이터 분석           |
| 김희찬 🐔 | 백엔드, 데이터 분석           |

<br/>

## 참고자료

> **좋은 빛 정보센터**<br/> https://www.goodlight.or.kr/link.do?link=fac/eff/GihEffect<br/> **빛공해 현황분석 및 영향평가 결과 보고서**<br/> https://opengov.seoul.go.kr/public/20625138<br/> <br/>
>
> **관련 기사**<br/>
>
> 1. **‘빛공해’에 밤별이 소멸한다…2040년 10개 중 6개 사라져** <br/> https://www.hani.co.kr/arti/science/science_general/1076689.html <br/>
> 2. **한국 빛공해 세계 최악 수준** https://n.news.naver.com/mnews/article/015/0003608580?sid=102

## 데이터셋

> **서울시 시간별 조도 데이터**<br/> http://data.seoul.go.kr/dataList/OA-15969/S/1/datasetView.do<br/><br/>**서대문구 빛공해 민원지역 정밀계측** https://www.data.go.kr/data/15109204/fileData.do#tab-layer-file <br/><br/> **국민권익위원회*민원빅데이터*분석정보\_API_2022** https://www.data.go.kr/data/15101903/openapi.do[https://bigdata.epeople.go.kr/bigdata/pot/stst/mwkwrd/forwardStstMwkwrdDetail.npaid?mwkwrd=빛공해&dspMenuId=P0053&dspLinkMenuId=P0053&\_csrf=1826c5a1-f672-4d64-8e20-f7a2473ee0b7](https://bigdata.epeople.go.kr/bigdata/pot/stst/mwkwrd/forwardStstMwkwrdDetail.npaid?mwkwrd=%EB%B9%9B%EA%B3%B5%ED%95%B4&dspMenuId=P0053&dspLinkMenuId=P0053&_csrf=1826c5a1-f672-4d64-8e20-f7a2473ee0b7) <br/><br/> **연도별 세계 빛공해 데이터(한국 O)**<br/>
>
> 1. G20 통계 지표<br/> https://www.lightpollutionmap.info/LP_Stats/<br/><br/>
> 2. 우리나라 연도별 빛공해 평균 수치
>    [https://www.lightpollutionmap.info/LP_Stats/country.html?country=South Korea&type=](https://www.lightpollutionmap.info/LP_Stats/country.html?country=South%20Korea&type=)
