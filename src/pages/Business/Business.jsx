import React, { useState } from "react";
import CareOne from "../../components/CareOne/CareOne";
import CareTwo from "../../components/CareTwo/CareTwo";
import Check from "../../components/Check/Check";
import Kind from "../../components/Kind/Kind";
import Nav from "../../components/Nav/Nav";
import Point from "../../components/Point/Point";
import Reviews from "../../components/Review/Reviews";
import Slogan from "../../components/Slogan/Slogan";
import Sponsor from "../../components/Sponsor/Sponsor";
import Store from "../../components/Store/Store";
import Summary from "../../components/Summary/Summary";
import "./css/index.css";
function Business() {
  const [now, setNow] = useState(0);
  return (
    <main className="business">
      <div className="banner">
        <div className="title">비즈니스 케어</div>
      </div>
      <Nav now={now} setnow={setNow} navArr={navArr} type="business" />
      {now === 0 ? (
        <>
          <Summary type="building" nav="business" />
          <div className="building-care">
            <div className="pack">
              <div className="left">
                <div className="category">EVERPURI CARE</div>
                <div className="title">
                  쾌적한 환경을 제공하여 <br />
                  <b> 업무 효율을 높여</b> 드립니다!
                </div>
              </div>
              <div className="right">
                {buildingArr.map(({ img, title, sub }, idx) => {
                  return (
                    <div key={idx} className="card">
                      <img
                        src={`/assets/business/${img}.png`}
                        srcSet={`/assets/business/${img}@2x.png 2x,/assets/business/${img}@3x.png 3x`}
                        alt=""
                      />
                      <div className="content">
                        <b className="title">
                          <span className="tl">{title}</span>
                          <span className="back" />
                        </b>
                        <div className="sub">{sub}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <Sponsor />
          <Point type="aircon" arr={pointArr} />
          <Reviews
            title="건물관리는 에버퓨리에 믿고 맡기세요!"
            arr={[0, 0, 0, 0, 0, 0, 0, 0]}
            type="building"
            nav="business"
          />
          <Store />
        </>
      ) : now === 1 ? (
        <>
          <Summary type="aircare" nav="business" />
          <CareOne type="aircare" cleanArr={aircareClean} nav="business" />
          <Point type="aircare" arr={pointArr} />
          <Slogan type="aircare" nav="business" />
          <Reviews
            title="공기질케어는 에버퓨리에 믿고 맡기세요!"
            arr={[0, 0, 0, 0, 0, 0, 0, 0]}
            type="aircare"
            nav="business"
          />
          <Store />
        </>
      ) : now === 2 ? (
        <>
          <Summary type="airfilter" nav="business" />
          <Check type="airfilter" checkArr={[0, 0, 0]} nav="business" />
          <CareOne type="airfilter" cleanArr={airfilterClean} nav="business" />
          <Slogan type="airfilter" nav="business" />
          <CareTwo type="airfilter" arr={airfilterCare02} nav="business" />
          <Point type="airfilter" arr={pointArr2} />
          <Kind type="filter" arr={["공기정화장치", "디퓨저"]} nav="business" />
          <Store />
        </>
      ) : (
        <>
          <Summary type="purify" nav="business" />
          <div className="purify-one">
            <div className="pack">
              <div className="top">
                <div className="left">
                  <div className="category">EVERPURI CARE 01</div>
                  <div className="title">
                    <b>다중시설은 법정의무소독이 필수</b>입니다
                  </div>
                  <div className="sub">
                    법정의무소독은 국가에서 기준을 정하고 법으로 정해둔 <br />{" "}
                    소독횟수로 해당되는 시설은 정기적인 방역 및 소독을
                    실시해야합니다.
                  </div>
                </div>
                <img
                  src="/assets/business/purify1.png"
                  srcSet="/assets/business/purify1@2x.png 2x , /assets/business/pruify1@3x.png 3x"
                  alt=""
                />
              </div>
              <div className="bottom">
                <div className="bottom-head">
                  <div className="left">종류</div>
                  <div className="right">
                    <div className="right-top">소독횟수</div>
                    <div className="right-bottom">
                      <div className="month">4월 ~ 9월</div>
                      <div className="month">10월 ~ 3월</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Business;
const navArr = [
  "건물관리",
  "공기질케어",
  "공기정화장치 필터 교체",
  "방역·소독 서비스",
];
const buildingArr = [
  {
    img: "buildingcare1",
    title: "관공서·병원·학교청소",
    sub: `관공서나 학교, 병원등은 청결이 중요시 되는 
공간인 만큼 보다 깨끗한 관리가 이루어져야합니다. 
이러한 공간을 오랫동안 깨끗하게 유지할 수 있는 
전문 클리닝입니다.`,
  },
  {
    img: "buildingcare2",
    title: "공장 청소",
    sub: `규모가 크고, 다양한 물건이 쌓여있는 공장은 각종 
먼지와 쓰레기에 노출되기 쉬우며 관리가 어렵습니다. 
이러한 공간을 오랫동안 깨끗하게 유지할 수 있는 
전문 클리닝입니다.`,
  },
  {
    img: "buildingcare3",
    title: "회사·사무실 청소",
    sub: `많은 사람들이 일하고 있는 회사는 먼지나 오염물에
쉽게 노출되기 쉬우며 관리가 어렵습니다. 
이러한 공간을 오랫동안 깨끗하게 유지할 수 있는 
전문 클리닝입니다.`,
  },
  {
    img: "buildingcare4",
    title: "매장 청소",
    sub: `많은 소비자들이 다녀가는 매장의 청결함은 매장의 
이미지에도 영향을 미칩니다. 
매장을 깨끗하고 위생적이게 유지시켜주는 
전문 클리닝입니다`,
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
    img: "point-8",
    title: "약품과 장비",
    bold: "인체에 무해한 친환경",
    content: `오직 고객의 건강만을 생각하며 인체에
무해한 친환경 약품과 장비만을 사용`,
  },
  {
    img: "point-4",
    title: "서비스 품질",
    bold: "혼을 담은",
    content: `매월 1회 CS교육과 친절한 교육을 통한 
양질의 CS마스터 팀장을 양성`,
  },
];
const pointArr2 = [
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
    img: "point-3",
    title: "약품과 장비",
    bold: "인체에 무해한 친환경",
    content: `오직 고객의 건강만을 생각하며 인체에
무해한 친환경 약품과 장비만을 사용`,
  },
  {
    img: "point-4",
    title: "서비스 품질",
    bold: "혼을 담은",
    content: `매월 1회 CS교육과 친절한 교육을 통한 
양질의 CS마스터 팀장을 양성`,
  },
];
const aircareClean = [
  {
    img: "aircareclean1",
    title: "배설물 제거",
  },
  {
    img: "aircareclean2",
    title: "친환경 세제 살포 및 세척",
  },
  {
    img: "aircareclean3",
    title: "고온 스팀 살균",
  },
  {
    img: "aircareclean4",
    title: "차단망 시공",
  },
];
const airfilterClean = [
  {
    img: "airfilterclean1",
    title: "",
  },
  {
    img: "airfilterclean2",
    title: "",
  },
  {
    img: "airfilterclean3",
    title: "",
  },
  {
    img: "airfilterclean4",
    title: "",
  },
  {
    img: "airfilterclean5",
    title: "",
  },
  {
    img: "airfilterclean6",
    title: "",
  },
  {
    img: "airfilterclean7",
    title: "",
  },
  {
    img: "airfilterclean8",
    title: "",
  },
];
const airfilterCare02 = [
  {
    img: "/assets/business/care2-1.svg",
    title: `필터와 관로의 오염은
심각한 실내 공해를 유발`,
    sub: `공기정화장치 (전열교환기)를 청소하지
않을 시, 필터와 관로가 오염되어
오히려 공기오염과 곰팡이를 유발하여
심각한 실내 공해를 유발합니다.`,
  },
  {
    img: "/assets/business/care2-2.svg",
    title: `내부먼지 및
세균을 제거`,
    sub: `공기정화장치 내부에 쌓여있는 먼지
및 세균을 제거하여 공기청정기가
본연의 역할을 할 수 있도록
관리해야합니다.`,
  },
  {
    img: "/assets/business/care2-3.svg",
    title: `호흡기 질환을
예방`,
    sub: `공기중 오염물질은 호흡기에
직접적인 영향을 주기 때문에
더욱 꼼꼼히 관리하여야합니다.`,
  },
];
