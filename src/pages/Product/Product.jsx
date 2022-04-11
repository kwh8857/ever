import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CareOne from "../../components/CareOne/CareOne";
import CareTwo from "../../components/CareTwo/CareTwo";
import Check from "../../components/Check/Check";
import Kind from "../../components/Kind/Kind";
import Nav from "../../components/Nav/Nav";
import Point from "../../components/Point/Point";
import Reviews from "../../components/Review/Reviews";
import Service from "../../components/Service/Service";
import Slogan from "../../components/Slogan/Slogan";
import Store from "../../components/Store/Store";
import Summary from "../../components/Summary/Summary";
import "./css/index.css";
function Product({ agent }) {
  const location = useLocation();
  const [now, setNow] = useState(0);
  useEffect(() => {
    if (location.state) {
      setNow(location.state - 1);
      document.getElementById("root").scrollTo(0, 0);
    }

    return () => {};
  }, [location]);

  return (
    <main className="product">
      <div className="banner">
        <div className="title">가전제품케어</div>
      </div>
      <Nav
        now={now}
        setnow={setNow}
        navArr={navArr}
        type="product"
        agent={agent}
      />
      {now === 0 ? (
        <div className="aircon">
          <Summary type="aircon" nav="product" agent={agent} />
          <Check
            type="aircon"
            circleArr={airconArr}
            checkArr={[0, 0, 0, 0, 0]}
            nav="product"
            agent={agent}
          />
          <CareOne
            type="aircon"
            cleanArr={cleanArr}
            nav="product"
            agent={agent}
          />
          <Slogan type="aircon" nav="product" />
          <CareTwo type="aircon" arr={care02Arr} nav="product" agent={agent} />
          <Point type="aircon" arr={pointArr} />
          <Service type="aircon" />
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
            arr={[0, 0, 0, 0, 0, 0, 0, 0]}
            type="aircon"
            nav="product"
          />
          <Store />
        </div>
      ) : now === 1 ? (
        <div className="washing">
          <Summary type="wash" nav="product" agent={agent} />
          <Check
            type="wash"
            circleArr={washArr}
            checkArr={[0, 0, 0]}
            nav="product"
            agent={agent}
          />
          <CareOne
            type="wash"
            cleanArr={washClean}
            nav="product"
            agent={agent}
          />
          <Slogan type="wash" nav="product" />
          <CareTwo type="wash" arr={washCare02} nav="product" agent={agent} />
          <Point type="wash" arr={pointArr2} />
          <Service type="wash" />
          <Kind type="wash" arr={kindArr} />
          <Reviews
            title="세탁기 분해세척은 에버퓨리에 믿고 맡기세요!"
            sub={`완벽한 홈케어로 입소문 타고 평판만으로 
여기까지 왔습니다.`}
            arr={[0, 0, 0, 0, 0, 0, 0, 0]}
            type="wash"
            nav="product"
          />
          <Store />
        </div>
      ) : now === 2 ? (
        <div className="hood">
          <Summary type="hood" nav="product" agent={agent} />
          <Check
            type="hood"
            checkArr={[0, 0, 0, 0, 0]}
            nav="product"
            agent={agent}
          />
          <CareOne
            type="hood"
            cleanArr={hoodClean}
            nav="product"
            agent={agent}
          />
          <Slogan type="hood" nav="product" />
          <CareTwo type="hood" arr={hoodCare02} nav="product" agent={agent} />
          <Point type="hood" arr={pointArr3} />
          <Kind type="hood" arr={["슬림형 후드", "디럭스형 후드"]} />
          <Reviews
            title="주방후드 분해세척은 에버퓨리에 믿고 맡기세요!"
            sub={`완벽한 홈케어로 입소문 타고 평판만으로 
여기까지 왔습니다.`}
            arr={[0, 0, 0, 0, 0, 0, 0, 0]}
            type="hood"
            nav="product"
          />
          <Store />
        </div>
      ) : now === 3 ? (
        <div className="air">
          <Summary type="air" nav="product" agent={agent} />
          <Check
            type="air"
            checkArr={[0, 0, 0, 0, 0]}
            nav="product"
            agent={agent}
          />
          <CareOne
            type="air"
            cleanArr={hoodClean}
            nav="product"
            agent={agent}
          />
          <Slogan type="air" nav="product" />
          <CareTwo type="air" arr={airCare02} nav="product" agent={agent} />
          <Point type="hood" arr={pointArr3} />
          <Reviews
            title="공기청정기 분해세척은 에버퓨리에 믿고 맡기세요!"
            sub={`완벽한 홈케어로 입소문 타고 평판만으로 
여기까지 왔습니다.`}
            arr={[0, 0, 0, 0, 0, 0, 0, 0]}
            type="wash"
            nav="product"
          />
          <Store />
        </div>
      ) : (
        <div className="filter">
          <Summary type="filter" nav="product" agent={agent} />
          <Check
            type="filter"
            checkArr={[0, 0, 0, 0, 0]}
            nav="product"
            agent={agent}
          />
          <CareOne
            type="filter"
            cleanArr={filterClean}
            nav="product"
            agent={agent}
          />
          <Slogan type="filter" nav="product" />
          <CareTwo
            type="filter"
            arr={filterCare02}
            nav="product"
            agent={agent}
          />
          <Point type="hood" arr={pointArr3} />
          <Kind type="filter" arr={["공기정화장치", "디퓨저"]} />
          <Reviews
            title="공기정화장치 필터 교체은 에버퓨리에 믿고 맡기세요!"
            sub={`완벽한 홈케어로 입소문 타고 평판만으로 
여기까지 왔습니다.`}
            arr={[0, 0, 0, 0, 0, 0, 0, 0]}
            type="filter"
            nav="product"
          />
          <Store />
        </div>
      )}
    </main>
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
const hoodClean = [
  {
    img: "hoodclean1",
    title: "보양작업",
  },
  {
    img: "hoodclean2",
    title: "친환경 세제",
  },
  {
    img: "hoodclean3",
    title: "후드 고압 세척",
  },
  {
    img: "hoodclean4",
    title: "후드필터 및 환풍기 탈거",
  },
  {
    img: "hoodclean5",
    title: "후드필터 고압 세척",
  },
  {
    img: "hoodclean6",
    title: "건조 후 부착",
  },
];
const filterClean = [
  {
    img: "filterclean1",
    title: "전열교환기 소자 해체",
  },
  {
    img: "filterclean2",
    title: "소자 교환 및 청소",
  },
  {
    img: "filterclean3",
    title: "필터 교체",
  },
  {
    img: "filterclean4",
    title: "청소기로 먼지 흡입",
  },
  {
    img: "filterclean5",
    title: "극세사 타올 청소",
  },
  {
    img: "filterclean6",
    title: "소자 및 필터 장착",
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
    tabletsub: `각종 세균들이 서식하고 있는 
에어컨에 친환경 약품과 고압세척, 
스팀살균으로 인체에 해로운 균들을 
박멸하여 공기의 품질을 향상시켜 
쾌적하고 맑은 공기 제공`,
  },
  {
    img: "/assets/product/care02-2.svg",
    title: `에너지 전기료
절감효과`,
    sub: `미국 NU-CALGON의 실험 보고서에
따르면 세척을 한 에어컨의 경우
하지 않는 에어컨에 비해 약 27%의 
전기요금 절감 가능`,
    tabletsub: `미국 NU-CALGON의 실험 
보고서에 따르면 세척을 한 
에어컨의 경우 하지 않는 에어컨에 
비해 약 27%의 전기요금 절감 가능`,
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
    tabletsub: `고장과 기기의 부식을 초래하는 
열교환기에 붙어있던 먼지 및 
이물질들과 세균을 제거함으로써 
공기의 흐름이 원활하게 되고 가동시 
기기에 무리를 주지않아 수명을 연장`,
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
const hoodCare02 = [
  {
    img: "/assets/product/care02-6.svg",
    title: `기름때 및 찌든때로 
인한 화재 예방`,
    sub: `주방 후드의 외관은 깨끗해보여도
손이 닿지 않는 내부의 오염물질 및
기름때로 인해 악취 및 고장, 화재
질병 등을 초래하게 됩니다..`,
  },
  {
    img: "/assets/product/care02-5.svg",
    title: `주방 내
악취제거`,
    sub: `눈에 보이지 않는 오염물질까지
꼼꼼하게 청소하여
주방 내 악취를 제거합니다.
.`,
  },
  {
    img: "/assets/product/care02-2.svg",
    title: `전기료 절감 및 
환기능력 향상`,
    sub: `주방후드를 청소하지 않으면
동일 전력 사용량 대비 
환기 효율이 떨어져 전기료 상승
및 오염 환경에 노출됩니다.
 `,
  },
  {
    img: "/assets/product/care02-7.svg",
    title: `각종 세균과 
해충 번식을 예방`,
    sub: `눈에 보이지 않는 깊숙한
부분인 만큼 세균과 해충이
번식하기 쉬워, 꼼꼼한 분해 청소로
세균과 해충 번식을 예방합니다.`,
  },
];
const airCare02 = [
  {
    img: "/assets/product/care02-8.svg",
    title: `공기청정기의 오염은 
심각한 실내 공해를 유발`,
    sub: `오염된 공기를 청정시켜주는 공기청정기가
오염되었을 때 공기청정기 내부에 있는
묵은 오염 물질이 더해져 보다
심각한 실내 공해를 유발합니다.`,
  },
  {
    img: "/assets/product/care02-9.svg",
    title: `내부먼지 및
세균 제거`,
    sub: `공기청정기 내부에 쌓여있는 먼지
및 세균을 제거하여 공기청정기가
본연의 역할을 할 수 있도록
관리해야합니다.`,
  },
  {
    img: "/assets/product/care02-7.svg",
    title: `호흡기 질환을
예방`,
    sub: `공기중 오염물질은 호흡기에
직접적인 영향을 주기 때문에
더욱 꼼꼼히 관리하여야합니다.`,
  },
];
const filterCare02 = [
  {
    img: "/assets/product/care02-8.svg",
    title: `필터와 관로의 오염은
심각한 실내 공해를 유발`,
    sub: `공기정화장치 (전열교환기)를 청소하지
않을 시, 필터와 관로가 오염되어
오히려 공기오염과 곰팡이를 유발하여
심각한 실내 공해를 유발합니다.`,
  },
  {
    img: "/assets/product/care02-9.svg",
    title: `내부먼지 및
세균 제거`,
    sub: `공기정화장치 내부에 쌓여있는 먼지
및 세균을 제거하여 공기청정기가
본연의 역할을 할 수 있도록
관리해야합니다.`,
  },
  {
    img: "/assets/product/care02-7.svg",
    title: `호흡기 질환을
예방`,
    sub: `공기중 오염물질은 호흡기에
직접적인 영향을 주기 때문에
더욱 꼼꼼히 관리하여야합니다.`,
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
    img: "point-5",
    title: "서비스",
    bold: "소독ㆍ살균",
    content: `고온스팀살균`,
  },
  {
    img: "point-4",
    title: "서비스 품질",
    bold: "혼을 담은",
    content: `매월 1회 CS교육과 친절한 교육을 통한 
양질의 CS마스터 팀장을 양성`,
  },
];
const pointArr3 = [
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
const kindArr = [
  "통돌이세탁기",
  "드럼세탁기",
  "빌트인세탁기",
  "아기용세탁기",
  "트윈워시세탁기",
  "플렉스워시",
];
