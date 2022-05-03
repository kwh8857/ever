import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
function Business({ agent }) {
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
    <main className="business">
      <div className="banner">
        <div className="title">비즈니스 케어</div>
      </div>
      <Nav
        now={now}
        setnow={setNow}
        navArr={navArr}
        type="business"
        agent={agent}
      />
      {now === 0 ? (
        <>
          <Summary type="building" nav="business" agent={agent} />
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
                {buildingArr.map(({ img, title, sub, temsub }, idx) => {
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
                        <div className="sub">
                          {agent !== "pc" && temsub ? temsub : sub}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <Sponsor agent={agent} />
          <Point type="aircon" arr={pointArr} agent={agent} />
          <Reviews
            title={`건물관리는
에버퓨리에 믿고 맡기세요!`}
            arr={[0, 0, 0, 0, 0, 0, 0, 0]}
            type="building"
            nav="business"
            agent={agent}
          />
          <Store agent={agent} />
        </>
      ) : now === 1 ? (
        <>
          <Summary type="aircare" nav="business" agent={agent} />
          <CareOne
            type="aircare"
            cleanArr={aircareClean}
            nav="business"
            agent={agent}
          />
          <Point type="aircare" arr={pointArr} agent={agent} />
          <Slogan type="aircare" nav="business" agent={agent} />
          <Reviews
            title={`공기질케어는
에버퓨리에 믿고 맡기세요!`}
            arr={[0, 0, 0, 0, 0, 0, 0, 0]}
            type="aircare"
            nav="business"
            agent={agent}
          />
          <Store agent={agent} />
        </>
      ) : now === 2 ? (
        <>
          <Summary type="airfilter" nav="business" agent={agent} />
          <Check
            type="airfilter"
            checkArr={[0, 0, 0]}
            nav="business"
            agent={agent}
          />
          <CareOne
            type="airfilter"
            cleanArr={airfilterClean}
            nav="business"
            agent={agent}
          />
          <Slogan type="airfilter" nav="business" agent={agent} />
          <CareTwo
            type="airfilter"
            arr={airfilterCare02}
            nav="business"
            agent={agent}
          />
          <Point type="airfilter" arr={pointArr2} agent={agent} />
          <Kind
            type="filter"
            arr={["공기정화장치", "디퓨저"]}
            nav="business"
            agent={agent}
          />
          <Store agent={agent} />
        </>
      ) : (
        <>
          <Summary type="purify" nav="business" agent={agent} />
          <div className="purify-one">
            <div className="pack">
              <div className="top">
                <div className="left">
                  <div className="category">EVERPURI CARE 01</div>
                  <div className="title">
                    <b>
                      다중시설은 법정의무소독이
                      {agent === "mb" ? <br /> : undefined} 필수
                    </b>
                    입니다
                  </div>
                  <div className="sub">
                    법정의무소독은 국가에서 기준을 정하고
                    {agent === "mb" ? <br /> : undefined} 법으로 정해둔{" "}
                    {agent !== "mb" ? <br /> : undefined} 소독횟수로 해당되는
                    시설은 {agent === "mb" ? <br /> : undefined}정기적인 방역 및
                    소독을 실시해야합니다.
                  </div>
                </div>
                {agent === "pc" ? (
                  <img
                    src="/assets/business/purify1.png"
                    srcSet="/assets/business/purify1@2x.png 2x , /assets/business/pruify1@3x.png 3x"
                    alt=""
                  />
                ) : undefined}
              </div>
              <div className="bottom">
                {agent !== "mb" ? (
                  <>
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
                    <div className="bottom-body">
                      <div className="body-first">
                        <div className="left">
                          <div className="box">
                            호텔 및 여관 (객실수 20실이상) 관광진흥법에 의한
                            관광숙박업소
                          </div>
                          <div className="box">
                            식품접객업소 (연면적 300㎡ 이상)
                          </div>
                          <div className="box">
                            고속버스·시내버스·시외버스·전세버스· 장의자동차{" "}
                            <br /> 항공법에 의한 항공기 <br /> 해운법에 의한
                            영객선 및 대합실 (연면적 300㎡ 이상의대합실에
                            한한다) <br /> 및 철도법에 의한 여객운차량 및
                            여객대합실
                          </div>
                          <div className="box">
                            유통산업발전법에 의한 시장·대형점·백화점·쇼핑센터 및
                            도매센터
                          </div>
                          <div className="box">
                            종합병원·병원·치과병원 및 한방병원
                          </div>
                        </div>
                        <div className="right">
                          <div className="box">
                            <b>1회 이상 / 1월</b>
                            매월 1회
                          </div>
                          <div className="box">
                            <b>1회 이상 / 2월</b>
                            2개월에 1회
                          </div>
                        </div>
                      </div>
                      <div className="body-second">
                        <div className="left">
                          <div className="box">
                            1회 100인이상에게 계속적으로 식사를 제공하는
                            집단급식소
                          </div>
                          <div className="box">
                            50인 이상을 수용할 수 있는 기숙사 및 합숙소
                          </div>
                          <div className="box">공연장 (300석 이상)</div>
                          <div className="box">
                            {
                              "<초.중등 교육법>제2조 <고등교육법>제2조의 규정에 의한 학교"
                            }
                          </div>
                          <div className="box">
                            학원의 설립·운영 및 과외교습소에 의한
                            학원(연면적1,000㎡ 이상)
                          </div>
                          <div className="box">
                            연면적 2,000㎡ 이상의 사무실용 건축물 및 복합용도의
                            건축물
                          </div>
                          <div className="box">
                            &lt;영.유아보육법 &gt;에 의한 영·유아보육시설 및{" "}
                            <br />
                            &lt;유아교육법&gt;에 의한 유치원 <br />
                            (50인 이상을 수용하는 영.유아보육시설 및 유치원의
                            경우에 한한다)
                          </div>
                        </div>
                        <div className="right">
                          <div className="box">
                            <b>1회 이상 / 2월</b>
                            2개월에 1회
                          </div>
                          <div className="box">
                            <b>1회 이상 / 3월</b>
                            3개월에 1회
                          </div>
                        </div>
                      </div>
                      <div className="body-last">
                        <div className="left">
                          <div className="box">공동주택 (300세대이상)</div>
                        </div>
                        <div className="right">
                          <div className="box">
                            <b>1회 이상 / 2월</b>
                            2개월에 1회
                          </div>
                          <div className="box">
                            <b>1회 이상 / 3월</b>
                            3개월에 1회
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="mb-wrapper">
                    <div className="box one">
                      <div className="head">종류</div>
                      <div className="content">
                        호텔 및 여관 (객실수 20실이상) <br /> 관광진흥법에 의한
                        관광숙박업소
                      </div>
                      <div className="content">
                        식품접객업소 (연면적 300㎡ 이상)
                      </div>
                      <div className="content">
                        고속버스·시내버스·시외버스·전세버스· 장의자동차 <br />{" "}
                        항공법에 의한 항공기 <br /> 해운법에 의한 영객선 및
                        대합실 (연면적 300㎡ 이상의
                        <br /> 대합실에 한한다) <br /> 및 철도법에 의한
                        여객운차량 및 여객대합실
                      </div>
                      <div className="content">
                        유통산업발전법에 의한 시장·대형점· <br />{" "}
                        백화점·쇼핑센터 및 도매센터
                      </div>
                      <div className="content">
                        종합병원·병원·치과병원 및 한방병원
                      </div>
                      <div className="foot-head grey">소독횟수</div>
                      <div className="foot">
                        <div className="left">
                          <div className="grey">4월 ~ 9월</div>
                          <div>
                            <b> 1회 이상 / 1월</b> <br /> 매월 1회
                          </div>
                        </div>
                        <div className="right">
                          <div className="grey">10월 ~ 3월</div>
                          <div>
                            <b>1회 이상 / 2월</b> <br /> 2개월에 1회
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box two">
                      <div className="head">종류</div>
                      <div className="content">
                        1회 100인이상에게 계속적으로 <br /> 식사를 제공하는
                        집단급식소
                      </div>
                      <div className="content">
                        50인 이상을 수용할 수 있는 기숙사 및 합숙소
                      </div>
                      <div className="content">공연장 (300석 이상)</div>
                      <div className="content">
                        &lt;초.중등 교육법 &gt;제2조 &lt;고등교육법 &gt; <br />{" "}
                        제2조의 규정에 의한 학교
                      </div>
                      <div className="content">
                        학원의 설립·운영 및 과외교습소에 의한 학원 <br />
                        (연면적1,000㎡ 이상)
                      </div>
                      <div className="content">
                        연면적 2,000㎡ 이상의 사무실용 <br /> 건축물 및
                        복합용도의 건축물
                      </div>
                      <div className="content">
                        &lt;영.유아보육법&gt;에 의한 영·유아보육시설 및 <br />
                        &lt;유아교육법&gt;에 의한 유치원 <br /> (50인 이상을
                        수용하는 영.유아보육시설 및 <br /> 유치원의 경우에
                        한한다)
                      </div>
                      <div className="foot-head grey">소독횟수</div>
                      <div className="foot">
                        <div className="left">
                          <div className="grey">4월 ~ 9월</div>
                          <div>
                            <b> 1회 이상 / 2월</b> <br /> 2개월에 1회
                          </div>
                        </div>
                        <div className="right">
                          <div className="grey">10월 ~ 3월</div>
                          <div>
                            <b>1회 이상 / 3월</b> <br /> 3개월에 1회
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box three">
                      <div className="head">종류</div>
                      <div className="content">공동주택 (300세대이상)</div>

                      <div className="foot-head grey">소독횟수</div>
                      <div className="foot">
                        <div className="left">
                          <div className="grey">4월 ~ 9월</div>
                          <div>
                            <b> 1회 이상 / 3월</b> <br /> 3개월에 1회
                          </div>
                        </div>
                        <div className="right">
                          <div className="grey">10월 ~ 3월</div>
                          <div>
                            <b>1회 이상 / 6월</b> <br /> 6개월에 1회
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Slogan type="purify" nav="business" agent={agent} />
          {agent !== "mb" ? (
            <div className="purify-two">
              <div className="pack">
                <b className="category">EVERPURI CARE 02</b>
                <b className="title">에버퓨리는 검증된 약품을 사용합니다</b>
                <div className="sub">
                  에버퓨리에서 사용하는 오라클워터는 식약처에서 식품첨가물로{" "}
                  <br /> 승인 받은 안전한 물질이며 오존 특유의 냄새가 나지 않는
                  유일한 물질입니다.
                </div>
                <img
                  className="system"
                  src="/assets/business/purify-two.png"
                  srcSet="/assets/business/purify-two@2x.png 2x , /assets/business/pruify-two@3x.png 3x"
                  alt=""
                />
                <div className="content-wrapper">
                  <div className="category-wrapper">
                    <div className="head center">구분</div>
                    <div className="box center">살균시간</div>
                    <div className="box center">살균력</div>
                    <div className="box center">유해성</div>
                    <div className="box center">특징</div>
                  </div>
                  <div className="water-wrapper">
                    <div className="head center">오라클워터</div>
                    <div className="box center">
                      <b className="first mint">30초 이내</b>
                    </div>
                    <div className="box center col">
                      코로나19 바이러스 살균력 테스트 <br />
                      <b>30초 이내 98% 박멸</b> <br /> 대장균 포도상구균 폐렴균
                      녹농균 등 <br />
                      <b> 1분 이내 99.999% 살균</b>
                    </div>
                    <div className="box center">
                      <div>
                        안구, 피부자극성 테스트 결과{" "}
                        <b className="mint">무해</b>
                        <br /> 경구투여 테스트 결과 <b className="mint">무해</b>
                        <br />
                        피부패치자극 테스트 결과 <b className="mint">무해</b>
                      </div>
                    </div>
                    <div className="box center">
                      <div>
                        방제 작업 시 살균 작용 후 수분내에 <br />{" "}
                        <b>분해되어 물과 산소로 변환</b> <br /> <br />
                        저비용으로 대량생산하여
                        {agent === "tablet" ? <br /> : undefined}
                        <b>
                          광범위한 {agent !== "tablet" ? <br /> : undefined}{" "}
                          지역 방제 가능
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="lax-wrapper">
                    <div className="head center">락스 (차아염소산나트륨)</div>
                    <div className="first center">5분 이내</div>
                    <div className="box center">
                      미생물, 바이러스 살균에 효과적(1000ppm) <br /> 코로나19
                      바이러스 살균에 대한 정보는 없음
                    </div>
                    <div className="box center">
                      강한 염기성으로 사람 및 동물 신체에 부식
                    </div>
                    <div className="box center">
                      염산 등 산성물질과 접촉시 염소가스 발생 <br /> 가정에서
                      쉽게 사용하는 살균제품
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : undefined}
          <Point type="airfilter" arr={pointArr} agent={agent} />
          <Reviews
            title={`방역·소독 서비스는
에버퓨리에 믿고 맡기세요!`}
            arr={[0, 0, 0, 0, 0, 0, 0, 0]}
            type="purify"
            nav="business"
            agent={agent}
          />
          <Store agent={agent} />
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
    temsub: `관공서나 학교, 병원등은 청결이 중요시 되는 
공간인 만큼 보다 깨끗한 관리가 이루어져야
합니다. 이러한 공간을 오랫동안 깨끗하게 
유지할 수 있는 전문 클리닝입니다.`,
  },
  {
    img: "buildingcare2",
    title: "공장 청소",
    sub: `규모가 크고, 다양한 물건이 쌓여있는 공장은 각종 
먼지와 쓰레기에 노출되기 쉬우며 관리가 어렵습니다. 
이러한 공간을 오랫동안 깨끗하게 유지할 수 있는 
전문 클리닝입니다.`,
    temsub: `규모가 크고, 다양한 물건이 쌓여있는 공장은
각종 먼지와 쓰레기에 노출되기 쉬우며
관리가 어렵습니다. 이러한 공간을 오랫동안 
깨끗하게 유지할 수 있는 전문 클리닝입니다.`,
  },
  {
    img: "buildingcare3",
    title: "회사·사무실 청소",
    sub: `많은 사람들이 일하고 있는 회사는 먼지나 오염물에
쉽게 노출되기 쉬우며 관리가 어렵습니다. 
이러한 공간을 오랫동안 깨끗하게 유지할 수 있는 
전문 클리닝입니다.`,
    temsub: `많은 사람들이 일하고 있는 회사는 먼지나
오염물에 쉽게 노출되기 쉬우며 관리가 
어렵습니다. 이러한 공간을 오랫동안 
깨끗하게 유지할 수 있는 전문 클리닝입니다.`,
  },
  {
    img: "buildingcare4",
    title: "매장 청소",
    sub: `많은 소비자들이 다녀가는 매장의 청결함은 매장의 
이미지에도 영향을 미칩니다. 
매장을 깨끗하고 위생적이게 유지시켜주는 
전문 클리닝입니다`,
    temsub: `많은 소비자들이 다녀가는 매장의 청결함은
매장의 이미지에도 영향을 미칩니다. 
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
    title: `연구개발 전담부서 
인증과`,
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
    title: `연구개발 전담부서
인증과`,
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
    img: "grey",
    title: "백시멘트 제거",
  },
  {
    img: "grey",
    title: "백시멘트 가루 제거",
  },
  {
    img: "grey",
    title: "마스킹테이프 부착",
  },
  {
    img: "grey",
    title: "친환경 줄눈제 시공",
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
    mbsub: `공기정화장치 내부에 쌓여있는 먼지 및 세균을
제거하여 공기청정기가 본연의 역할을
할 수 있도록 관리해야합니다.`,
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
