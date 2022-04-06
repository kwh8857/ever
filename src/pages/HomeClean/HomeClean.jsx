import React, { useState } from "react";
import CareOne from "../../components/CareOne/CareOne";
import CareTwo from "../../components/CareTwo/CareTwo";
import Check from "../../components/Check/Check";
import Nav from "../../components/Nav/Nav";
import Point from "../../components/Point/Point";
import Reviews from "../../components/Review/Reviews";
import Slogan from "../../components/Slogan/Slogan";
import Store from "../../components/Store/Store";
import Summary from "../../components/Summary/Summary";
import "./css/index.css";
function HomeClean() {
  const [now, setNow] = useState(0);
  return (
    <main className="homeclean">
      <div className="banner">
        <div className="title">홈클리닝</div>
      </div>
      <Nav now={now} setnow={setNow} navArr={navArr} type="home" />
      {now === 0 ? (
        <>
          <div className="homecare">
            <div className="pack">
              <b className="category">HOME CARE</b>
              <div className="title">
                <b>주거공간의 청소</b>는 <br /> 에버퓨리에게 맡겨주세요!
              </div>
              <div className="list">
                {homeList.map(({ title, content }, idx) => {
                  return (
                    <div key={idx} className="card">
                      <img
                        src={`/assets/homeclean/homecare${idx + 1}.svg`}
                        alt=""
                      />
                      <b className="title">{title}</b>
                      <div className="line" />
                      <div className="content">{content}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="back" />
          </div>
          <Point type="home" arr={homePoint} />
          <Reviews
            title="주거공간 청소는 에버퓨리에 믿고 맡기세요!"
            sub={`신축입주청소·이사청소·인테리어 청소·외창/외벽청소 등
오랫동안 깨끗하게 유지할 수 있는 전문 클리닝입니다.`}
            arr={[0, 0, 0, 0, 0, 0, 0, 0]}
            type="home"
            nav="homeclean"
          />
          <Store />
        </>
      ) : now === 1 ? (
        <>
          <Summary type="mat" nav="homeclean" />
          <Check
            type="mat"
            circleArr={homeCheck}
            checkArr={[0, 0, 0, 0, 0, 0]}
            nav="homeclean"
          />
          <CareOne type="mat" cleanArr={matClean} nav="homeclean" />
          <Slogan type="mat" nav="homeclean" />
          <CareTwo type="mat" arr={matCare02} nav="homeclean" />
          <Point type="aircon" arr={pointArr} />
          <div className="matservice">
            <div className="pack">
              <div className="title-wrapper">
                <div className="left">
                  <b className="category">EVERPURI SERVICE</b>
                  <div className="title">
                    싱글사이즈부터 라지킹까지 <br />
                    <b>다양한 형태의 매트리스 케어가 가능합니다</b>
                  </div>
                </div>
                <img
                  src="/assets/homeclean/matservice.png"
                  srcSet="/assets/homeclean/matservice@2x.png 2x , /assets/homeclean/matservice@3x.png 3x"
                  alt=""
                  className="right"
                />
              </div>
              <div className="content">
                <b className="content-head">
                  매트리스 건식 케어 / 매트리스 습식 케어
                </b>
                {matService.map(({ title, size }, idx) => {
                  return (
                    <div key={idx} className="card">
                      <span className="title">{title}</span>
                      <span className="size">{size}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <Reviews
            title="매트리스 청소는 에버퓨리에 믿고 맡기세요!"
            arr={[0, 0, 0, 0, 0, 0, 0, 0]}
            type="mat"
            nav="homeclean"
          />
          <Store />
        </>
      ) : now === 2 ? (
        <>
          <Summary type="mat" nav="homeclean" />
        </>
      ) : (
        <></>
      )}
    </main>
  );
}

export default HomeClean;
const navArr = [
  "주거공간청소",
  "매트리스 케어",
  "줄눈 시공",
  "실외기비둘기 퇴치",
  "해충·방역 서비스",
];
const homePoint = [
  {
    img: "point-1",
    title: "에버퓨리 소속",
    bold: "CS마스터 운영",
    content: `전문 교육을 이수받은 에버퓨리
CS마스터 팀장이 직접 방문 및 케어`,
  },
  {
    img: "point-2",
    title: "연구개발 전담부서 인증과",
    bold: "다수의 특허",
    content: `연구개발 전담부서 인증을 획득하고 검증된
    친환경세정제와 장비만을 사용`,
  },
  {
    img: "point-4",
    title: "서비스 품질",
    bold: "혼을 담은",
    content: `매월 1회 CS교육과 친절한 교육을 통한 
양질의 CS마스터 팀장을 양성`,
  },
];
const homeList = [
  {
    title: "신축입주청소",
    content: `신축 아파트나 빌라 등 입주 전
상태에서의 실내 청소 서비스`,
  },
  {
    title: "이사청소",
    content: `전 소유주나 세입자의 장기간 거주로 인해 생긴 
찌든 때와 묵은 때, 세균과 곰팡이 등으로 오염되었던 
생활공간을 깨끗한 주거환경으로 만들어 드리는 서비스`,
  },
  {
    title: "인테리어 청소",
    content: `아파트나 빌라 등 인테리어 공사 후의 실내 청소를 말하며, 
공사시 발생한 먼지, 오염, 시멘트가루 등의 제거를 위해 
구석구석 세밀하게 청소하는 서비스`,
  },
  {
    title: "외창ㆍ외벽 청소",
    content: `건축물의 외벽을 유리·석재·금속·목조타일·벽돌·콘크리트
대리석·화강석·알루미늄·황동·목재 등으로 분류하여 오염원을 
분석 후, 각 재질의 특성에 적합한 약품 및 세제를 이용하여 
세척하는 전문적인 서비스`,
  },
];
const homeCheck = [
  { img: "germ", title: "각종 세균 번식" },
  { img: "itching", title: "알레르기성 질환 유발" },
  { img: "kid", title: "호흡기 질환 영향" },
];
const matClean = [
  {
    img: "filterclean1",
    title: "매트리스 라돈 측정",
  },
  {
    img: "filterclean2",
    title: "매트리스 바디 2면 케어",
  },
  {
    img: "filterclean3",
    title: "매트리스 측4면 케어",
  },
  {
    img: "filterclean4",
    title: "UV자외선 살균",
  },
  {
    img: "filterclean5",
    title: "진드기 패치 부착",
  },
  {
    img: "filterclean6",
    title: "피톤치드 연무살균",
  },
];
const matCare02 = [
  {
    img: "/assets/homeclean/care2-1.svg",
    title: `피부질환
예방`,
    sub: `주방 후드의 외관은 깨끗해보여도
손이 닿지 않는 내부의 오염물질 및
기름때로 인해 악취 및 고장, 화재
질병 등을 초래하게 됩니다..`,
  },
  {
    img: "/assets/homeclean/care2-2.svg",
    title: `매트리스 노폐물 
오염 제거`,
    sub: `눈에 보이지 않는 오염물질까지
꼼꼼하게 청소하여
주방 내 악취를 제거합니다.
.`,
  },
  {
    img: "/assets/homeclean/care2-3.svg",
    title: `각종 세균 및 집먼지
진드기 제거`,
    sub: `주방후드를 청소하지 않으면
동일 전력 사용량 대비 
환기 효율이 떨어져 전기료 상승
및 오염 환경에 노출됩니다.
 `,
  },
  {
    img: "/assets/homeclean/care2-4.svg",
    title: `집먼지
진드기 사체 제거`,
    sub: `눈에 보이지 않는 깊숙한
부분인 만큼 세균과 해충이
번식하기 쉬워, 꼼꼼한 분해 청소로
세균과 해충 번식을 예방합니다.`,
  },
];
const pointArr = [
  {
    img: "point-1",
    title: "에버퓨리 소속",
    bold: "CS마스터 운영",
    content: `전문 교육을 이수받은 에버퓨리
CS마스터 팀장이 직접 방문 및 케어`,
  },
  {
    img: "point-2",
    title: "연구개발 전담부서 인증과",
    bold: "다수의 특허",
    content: `연구개발 전담부서 인증을 획득하고 
검증된 친환경세정제와 장비만을 사용`,
  },

  {
    img: "point-6",
    title: "소독ㆍ살균 서비스",
    bold: "4중 완벽",
    content: `UV자외선 살균, 피톤치드
연무살균, 진드기 패치`,
  },
  {
    img: "point-4",
    title: "서비스 품질",
    bold: "혼을 담은",
    content: `매월 1회 CS교육과 친절한 교육을 통한 
양질의 CS마스터 팀장을 양성`,
  },
];
const matService = [
  {
    title: "싱글 사이즈",
    size: "1000*2000*200",
  },
  {
    title: "슈퍼싱글 사이즈",
    size: "1100*2000*200",
  },
  {
    title: "더블 사이즈",
    size: "1400*2000*200",
  },
  {
    title: "퀸 사이즈",
    size: "1500*2000*200",
  },
  {
    title: "킹 사이즈",
    size: "1600*2000*200",
  },
  {
    title: "라지킹 사이즈",
    size: "1700*2000*200",
  },
];
