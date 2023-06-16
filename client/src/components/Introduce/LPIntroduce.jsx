import styles from "./Introduce.module.css";

const UKnowLP = () => {
  return (
    <>
      <div style={{ height: "100px" }}></div>
      <div className={styles.globalLPChart}>
        <h2 className={styles.ChartTitle}>
          <span className={styles.ChartTitleHightlight}>빛공해</span>란
          무엇일까요?
        </h2>
        <p className={styles.ChartParagraph}>
          우리가 모르는 사이에 이미 일상에 침투해있는 빛공해에 대해 알고
          계신가요?
        </p>
      </div>
    </>
  );
};

const LPIssue = () => {
  return (
    <>
      <div className={styles.globalLPChart}>
        <h2 className={styles.ChartTitle}>
          ‘빛공해’에 밤별이 소멸한다…2040년 10개 중 6개 사라져
        </h2>
        <p className={styles.ChartParagraph}>
          인공조명에 의한 빛공해로 인해 예상보다 빠른 속도로 밤하늘의 별들이
          사라지고 있다. <br />
          지금 추세라면 2040년에는 오늘 밤하늘에서 볼 수 있는 별 10개 가운데
          6개가 우리 눈에서 사라질 것으로 예측됐다.
          <br />
          <br />
          독일 지구과학연구센터의 크리스토퍼 키바 박사가 이끄는 연구팀은
          2011년부터 2022년까지 별 관측 자료를 분석한 결과
          <br />이 기간중 밤 하늘이 매년 평균 9.6%씩 밝아진 것으로 나타났다고
          국제학술지 ‘사이언스’에 발표했다.
          <br />
          <a
            href="https://www.hani.co.kr/arti/science/science_general/1076689.html"
            target="_blank"
          >
            한겨레신문
          </a>
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 className={styles.ChartTitle}>한국 '빛공해' 세계 최악 수준</h2>
        <p className={styles.ChartParagraph}>
          ... <br /> 한국은 특히 상황이 심각해 G20 국가 중 최악의 빛공해를 겪는
          것으로 나타났다.
          <br /> 전체 인구에서 빛공해에 노출된 인구 비율은 G20 국가 중
          사우디아라비아에 이어 두 번째로 높았고,
          <br /> 전 국토에서 빛공해 지역이 차지하는 비율은 이탈리아에 이어 두
          번째로 높았다. <br />
          한국 국민의 89.4%는 도심 조명과 공장 불빛 때문에 1년 내내 밤에
          은하수를 볼 수 없고
          <br /> 나머지 10.6%도 깨끗한 밤하늘을 보지 못했다.
          <br />
          <br /> 국토 89.4%가 빛공해에 시달리고 있어 면적만으로 따져도
          이탈리아(90.3%) 다음으로 심각한 수준이다.
          <br /> ... <br />
          <a
            href="https://n.news.naver.com/mnews/article/015/0003608580?sid=102"
            target="_blank"
          >
            한국경제
          </a>
        </p>
      </div>
    </>
  );
};

const LPProblem = () => {
  return (
    <>
      <h2 className={styles.ChartTitle}>
        <span className={styles.ChartTitleHightlight}>빛공해</span>, 우리에게
        어떤게 문제가 되냐구요?
      </h2>
      <p className={styles.ChartParagraph}>
        <a
          href="https://www.goodlight.or.kr/link.do?link=fac/eff/GihEffect2"
          target="_blank"
        >
          좋은 빛 정보센터
        </a>
      </p>
      <div className={styles.globalLPChart}>
        <h2 className={styles.ChartTitle}>인간의 생체리듬 교란</h2>
        <p className={styles.ChartParagraph}>
          생체리듬 가운데 하나로 약 24시간을 주기로 하는 날짜리듬을 “서카디안
          리듬(circadian rhythms)“이라고 합니다. <br />
          서카디안 리듬의 교란은 불면증, 비만, 당뇨, 우울증 및 조울증, 계절성
          정서 장애 등을 일으킬 수 있습니다.
        </p>
        <br />
        <br />
        <br />
        <br />
        <h2 className={styles.ChartTitle}>수면장애</h2>
        <p className={styles.ChartParagraph}>
          인공조명에 의한 야간활동의 증가에 따라 현대인들의 체내리듬 불균형
          현상은 증가하고 있습니다. <br />
          이러한 생체시계의 변화는 적절한 시간에서의 수면과 각성능력을
          손상시키고, 신진대사과정을 저해합니다.
        </p>
        <br />
        <br />
        <br />
        <br />
        <h2 className={styles.ChartTitle}>천체관측 방해</h2>
        <p className={styles.ChartParagraph}>
          수평선 위쪽으로 향하는 도시지역의 빛이 대기 중의 수분이나 먼지 등에
          의해 확산되면서 산란을 일으켜
          <br /> 밤하늘이 밝게 보이게 함으로써 천체관측에 악영향을 미칠 수
          있습니다.
        </p>
      </div>
      <h2 className={styles.ChartTitle}>
        생태계에 미치는 영향은 어떤게 있을까요?
      </h2>
      <div className={styles.globalLPChart}>
        <h2 className={styles.ChartTitle}>포유류에겐..</h2>
        <p className={styles.ChartParagraph}>
          도시로부터 발생되는 과도한 빛은 야행성 포유류에게 야간 생태계의
          손실(혼란)을 경험하게 만듭니다.
          <br />
          이러한 영향을 받는 포유류의 예로는 박쥐, 너구리, 사슴 등이 있습니다.
        </p>
        <br />
        <br />
        <br />
        <br />
        <h2 className={styles.ChartTitle}>파충류에겐..</h2>
        <p className={styles.ChartParagraph}>
          파충류는 빛공해에 크게 영향을 받습니다. 예를 들면 암컷 바다거북은 외진
          곳에 위치한 둥지나 어두운 해변을 좋아합니다.
          <br /> 하지만 해안조명은 바다거북들이 안전한 산란장소를 찾는 능력에
          지장을 줍니다.
        </p>
        <br />
        <br />
        <br />
        <br />
        <h2 className={styles.ChartTitle}>농작물</h2>
        <p className={styles.ChartParagraph}>
          야간조명은 식물의 생리생태에 여러 가지 영향을 미칩니다. 특히 광합성과
          성장 등의 영양생리와 생물계절에 영향,
          <br /> 단일식물 및 장일식물의 꽃눈형성에 미치는 영향, 수분을 위한
          방화곤충에 미치는 영향 등이 있습니다.
        </p>
      </div>
    </>
  );
};

const LPIntroduce = () => {
  return (
    <>
      <UKnowLP />
      <LPIssue />
      <div className={styles.blankDiv} />
      <LPProblem />
    </>
  );
};

export default LPIntroduce;
