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
function Product() {
  const [now, setNow] = useState(0);
  return (
    <div className="product">
      <div className="banner">
        <div className="title">가전제품케어</div>
      </div>
      <Nav now={now} setnow={setNow} navArr={navArr} />
      {now === 0 ? (
        <div className="aircon">
          <Summary type="aircon" />
          <Check
            type="aircon"
            circleArr={airconArr}
            checkArr={[0, 0, 0, 0, 0]}
          />
          <CareOne type="aircon" cleanArr={cleanArr} />
          <Slogan type="aircon" />
          <CareTwo type="aircon" arr={care02Arr} />
          <Point type="aircon" arr={pointArr} />
          <div className="section7">
            <div className="pack">
              <div className="category">EVERPURI SERVICE</div>
              <div className="title">
                서비스에 대해 인정받고
                <b>
                  끝까지 책임지는 <br /> 청소·시공전문업체
                </b>
                는 에버퓨리
              </div>
              <div className="list">
                <div className="card">
                  <span className="number">01</span>
                  <span className="title">
                    <b>완전분해를 원칙</b>으로 합니다
                  </span>
                </div>
                <div className="line" />
                <div className="card">
                  <span className="number">02</span>
                  <span className="title">
                    <b>검증된 핀세척제 웰존</b> (환경부 고시 안전검사 완료제품,
                    냉동협회 공인약품)만을 사용합니다
                  </span>
                </div>
                <div className="line" />
                <div className="card">
                  <span className="number">03</span>
                  <span className="title">
                    핀코팅을 통해 <b>제품의 수명을 늘려줍니다</b>
                  </span>
                </div>
                <div className="line" />
                <div className="card">
                  <span className="number">04</span>
                  <span className="title">
                    <b>무상 A/S기간은 3개월</b>입니다
                  </span>
                </div>
                <div className="line" />
                <div className="card">
                  <span className="number">05</span>
                  <span className="title">
                    <b>고압세척·고온스팀1차 살균·UV자외선 2차 살균</b>{" "}
                    시스템으로 진행됩니다.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="section8">
            <div className="pack">
              <div className="title">
                벽걸이부터 천장형까지 <br />
                <b>모든 형태의 에어컨 케어가 가능합니다</b>
              </div>
              <div className="list">
                <div className="card">
                  <img
                    src="/assets/product/section8-1.png"
                    srcSet="/assets/product/section8-1@2x.png 2x , /assets/product/section8-1@3x.png 3x"
                    alt=""
                  />
                  <div className="content">
                    <div className="title">벽걸이 에어컨</div>
                    <div className="subject one">
                      <b>일반형</b>
                      <span>10평 이하</span>
                    </div>
                    <div className="width-line" />
                    <div className="subject one">
                      <b>고급형</b>
                      <span>10평 이상 무풍형</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="/assets/product/section8-2.png"
                    srcSet="/assets/product/section8-2@2x.png 2x , /assets/product/section8-2@3x.png 3x"
                    alt=""
                  />
                  <div className="content">
                    <div className="title">스탠드 에어컨</div>
                    <div className="subject two">
                      <div className="left">
                        <b>일반형</b>
                        <span>10평 이하</span>
                      </div>
                      <div className="right">
                        <b>스마트</b>
                        <span>2012년 이후 무풍형 2구</span>
                      </div>
                    </div>
                    <div className="width-line" />
                    <div className="subject one">
                      <b>고급형</b>
                      <span>
                        무풍형 3구ㆍ 삼성 무풍 갤러리ㆍ LG 듀얼 에어컨
                      </span>
                    </div>
                    <div className="width-line" />
                    <div className="subject two">
                      <div className="left">
                        <b>업소일반</b>
                        <span>50평 이하</span>
                      </div>
                      <div className="right">
                        <b>업소대형</b>
                        <span>50평 이상</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="/assets/product/section8-3.png"
                    srcSet="/assets/product/section8-3@2x.png 2x , /assets/product/section8-3@3x.png 3x"
                    alt=""
                    style={{ marginRight: "18px" }}
                  />
                  <div className="content">
                    <div className="title">시스템 에어컨</div>
                    <div className="subject third">
                      <div>1/2 WAY</div>
                      <div>4WAY</div>
                      <div>360°</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Reviews
            title="에어컨 분해세척은 에버퓨리에 믿고 맡기세요!"
            sub={`완벽한 홈케어로 입소문 타고 평판만으로 
여기까지 왔습니다.`}
            arr={reviewArr}
          />
          <Store />
        </div>
      ) : now === 1 ? (
        <div className="washing">
          <Summary type="wash" />
          <Check type="wash" circleArr={washArr} checkArr={[0, 0, 0]} />
          <CareOne type="wash" cleanArr={washClean} />
          <Slogan type="wash" />
          <CareTwo type="wash" arr={washCare02} />
          <Point type="wash" arr={pointArr} />
        </div>
      ) : undefined}
    </div>
  );
}

export default Product;

const navArr = [
  "에어컨 분해청소",
  "세탁기 분해청소",
  "주방후드 분해세척",
  "공기청정기 케어",
  "공기정화장치 필터 교체",
];
const airconArr = [
  { img: "germ", title: "각종 세균 번식" },
  { img: "cold", title: "악취 및 냉방병" },
  { img: "illness", title: "호흡기 질환 영향" },
  { img: "price", title: "높은 전기요금" },
];
const washArr = [
  { img: "germ", title: "내부 세균 번식" },
  { img: "itching", title: "가려움증" },
  { img: "illness", title: "심한 악취" },
];
const cleanArr = [
  {
    img: "clean1",
    title: "전원차단",
  },
  {
    img: "clean2",
    title: "필터·그릴 분리",
  },
  {
    img: "clean3",
    title: "프론트판넬 분리",
  },
  {
    img: "clean4",
    title: "내부케이스 분리",
  },
  {
    img: "clean5",
    title: "PCB 분리",
  },
  {
    img: "clean6",
    title: "보양 작업",
  },
  {
    img: "clean7",
    title: "세척기대 설치",
  },
  {
    img: "clean8",
    title: "세척약품 살포",
  },
  {
    img: "clean9",
    title: "고압세척",
  },
  {
    img: "clean10",
    title: "스팀세척",
  },
  {
    img: "clean11",
    title: "송풍건조",
  },
  {
    img: "clean12",
    title: "케이스모터 분리",
  },
  {
    img: "clean13",
    title: "케이스류 세척",
  },
  {
    img: "clean14",
    title: "부품·필터 세척",
  },
  {
    img: "clean15",
    title: "부품 재조립",
  },
  {
    img: "clean16",
    title: "세척완료",
  },
];
const washClean = [
  {
    img: "washclean1",
    title: "전원차단",
  },
  {
    img: "washclean2",
    title: "완전 분해",
  },
  {
    img: "washclean3",
    title: "부품 고압 세척",
  },
  {
    img: "washclean4",
    title: "고압 세척 확인 후 조립",
  },
  {
    img: "washclean5",
    title: "고온 스팀 살균",
  },
  {
    img: "washclean6",
    title: "작동 테스트",
  },
];
const care02Arr = [
  {
    img: "/assets/product/care02-1.svg",
    title: `공기의 질
향상`,
    sub: `각종 세균들이 서식하고 있는 에어컨에
친환경 약품과 고압세척, 스팀살균으로 
인체에 해로운 균들을 박멸하여
공기의 품질을 향상시켜 쾌적하고
맑은 공기 제공`,
  },
  {
    img: "/assets/product/care02-2.svg",
    title: `에너지 전기료
절감효과`,
    sub: `미국 NU-CALGON의 실험 보고서에
따르면 세척을 한 에어컨의 경우
하지 않는 에어컨에 비해 약 27%의 
전기요금 절감 가능`,
  },
  {
    img: "/assets/product/care02-3.svg",
    title: `에어컨 성능 향상 및
수명연장`,
    sub: `고장과 기기의 부식을 초래하는 
열교환기에 붙어있던 먼지 및 이물질들과 
세균을 제거함으로써 공기의 흐름이 
원활하게 되고 가동시 기기에 무리를 
주지않아 수명을 연장`,
  },
];
const washCare02 = [
  {
    img: "/assets/product/care02-4.svg",
    title: `세탁기 내부의 
각종 세균제거`,
    sub: `세탁기 내부의 세균은 화장실 변기에 
비해 100배가 넘는 세균이 서식하고 있습니다. 
에버퓨리에서는 1차 고압세척,
2차 고온스팀으로 세균을 박멸합니다.`,
  },
  {
    img: "/assets/product/care02-5.svg",
    title: `세탁기 내부의
악취제거`,
    sub: `각종 세균,곰팡이,세제찌꺼기,이물질을
제거하여 악취의 원인을 제거합니다.`,
  },
  {
    img: "/assets/product/care02-3.svg",
    title: `세탁기
수명 연장`,
    sub: `세탁물의 이물질,세제로 인한 오염, 찌꺼기를
제거 해줌으로 인해 모터에 
무리를 주지 않아 수명을 연장시킵니다.`,
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
    img: "point-3",
    title: "소독ㆍ살균 서비스",
    bold: "2중 완벽",
    content: `고온스팀살균, UV자외선살균`,
  },
  {
    img: "point-4",
    title: "서비스 품질",
    bold: "혼을 담은",
    content: `매월 1회 CS교육과 친절한 교육을 통한 
양질의 CS마스터 팀장을 양성`,
  },
];
const reviewArr = [
  "aircon-review1",
  "aircon-review2",
  "aircon-review3",
  "aircon-review4",
  "aircon-review5",
  "aircon-review6",
  "aircon-review7",
  "aircon-review8",
];
