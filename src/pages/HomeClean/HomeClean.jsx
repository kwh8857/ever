import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
function HomeClean({ agent }) {
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
    <main className="homeclean">
      <div className="banner">
        <div className="title">홈클리닝</div>
      </div>
      <Nav
        now={now}
        setnow={setNow}
        navArr={navArr}
        type="home"
        agent={agent}
      />
      {now === 0 ? (
        <>
          <div className="homecare">
            <div className="pack">
              <b className="category">HOME CARE</b>
              <div className="title">
                <b>주거공간의 청소</b>는 <br /> 에버퓨리에게 맡겨주세요!
              </div>
              <div className="list">
                {homeList.map(
                  ({ title, content, tabletcontent, mbcontent }, idx) => {
                    return (
                      <div key={idx} className="card">
                        <img
                          src={`/assets/homeclean/homecare${idx + 1}${
                            agent === "mb" && (idx === 2 || idx === 3)
                              ? "mb"
                              : ""
                          }.svg`}
                          alt=""
                        />
                        <b className="title">{title}</b>
                        <div className="line" />
                        <div className="content">
                          {agent === "tablet" && tabletcontent
                            ? tabletcontent
                            : agent === "mb" && mbcontent
                            ? mbcontent
                            : content}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div className="back" />
          </div>
          <Point type="home" arr={homePoint} agent={agent} />
          <Reviews
            title={`주거공간 청소는
에버퓨리에 믿고 맡기세요!`}
            sub={`신축입주청소·이사청소·인테리어 청소·외창/외벽청소 등
오랫동안 깨끗하게 유지할 수 있는 전문 클리닝입니다.`}
            arr={[]}
            type="home"
            nav="homeclean"
            agent={agent}
          />
          <Store agent={agent} />
        </>
      ) : now === 1 ? (
        <>
          <Summary type="mat" nav="homeclean" agent={agent} />
          <Check
            type="mat"
            circleArr={homeCheck}
            checkArr={[0, 0, 0, 0, 0, 0]}
            nav="homeclean"
            agent={agent}
          />
          <CareOne
            type="mat"
            cleanArr={matClean}
            nav="homeclean"
            agent={agent}
          />
          <Slogan type="mat" nav="homeclean" agent={agent} />
          <CareTwo type="mat" arr={matCare02} nav="homeclean" agent={agent} />
          <Point type="aircon" arr={pointArr} agent={agent} />
          <div className="matservice">
            <div className="pack">
              <div className="title-wrapper">
                <div className="left">
                  <b className="category">EVERPURI SERVICE</b>
                  <div className="title">
                    싱글사이즈부터 라지킹까지 <br />
                    <b>
                      다양한 형태의{agent === "mb" ? <br /> : undefined}{" "}
                      매트리스 케어가 가능합니다
                    </b>
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
                  매트리스 건식 케어 {agent === "mb" ? <br /> : "/"} 매트리스
                  습식 케어
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
            title={`매트리스 청소는
 에버퓨리에 믿고 맡기세요!`}
            arr={[0, 0, 0, 0, 0, 0, 0, 0]}
            type="mat"
            nav="homeclean"
            agent={agent}
          />
          <Store agent={agent} />
        </>
      ) : now === 2 ? (
        <>
          <Summary type="joint" nav="homeclean" agent={agent} />
          <Check
            type="joint"
            circleArr={jointCheck}
            checkArr={[0, 0, 0, 0, 0]}
            nav="homeclean"
            agent={agent}
          />
          <CareOne
            type="joint"
            cleanArr={jointClean}
            nav="homeclean"
            agent={agent}
          />
          <Slogan type="joint" nav="homeclean" agent={agent} />
          <CareTwo
            type="joint"
            arr={jointCare02}
            nav="homeclean"
            agent={agent}
          />
          <Point type="joint" arr={jointpointArr} agent={agent} />
          <div className="jointservice">
            <div className="pack">
              <b className="category">EVERPURI SERVICE</b>
              <div className="title">
                <b>다양한 주거형태</b>에서 <br /> <b>줄눈 시공이 가능</b>합니다
              </div>
              <div className="content-wrapper">
                <div className="card one">
                  <div className="card-head">
                    <b>신축 줄눈시공</b>
                    <span>입주 3개월 미만</span>
                  </div>
                  <div className="wrapper">
                    <b className="name">신축 패키지</b>
                    <div className="content">
                      바닥 5개소 및 실리콘 오염방지 <br /> <br />
                      현관·욕실2·베란다·다용도실 <br /> 바닥 줄눈시공 및 실리콘{" "}
                      {agent === "mb" ? <br /> : undefined}
                      오염방지 줄눈코팅
                    </div>
                  </div>
                  <div className="wrapper">
                    <b className="name">신축 - 옵션A</b>
                    <div className="content">
                      욕실벽면 줄눈시공 (욕실 1개소)
                    </div>
                  </div>
                </div>
                <div className="card two">
                  <div className="card-head">
                    <b>구축 줄눈시공</b>
                    <span>입주 3개월 이상</span>
                  </div>
                  <div className="wrapper big">
                    <b className="name">구축 패키지</b>
                    <div className="content">
                      바닥 3개소 및 실리콘 오염방지 <br /> <br />{" "}
                      현관·욕실2·바닥 줄눈시공 <br /> 욕실2 실리콘 오염방지
                      줄눈코팅
                    </div>
                  </div>
                  <div className="wrapper small">
                    <b className="name">구축 - 옵션A</b>
                    <div className="content">
                      베란다·다용도실 등 {agent === "mb" ? <br /> : undefined}
                      1개소 바닥 줄눈시공
                    </div>
                  </div>
                  <div className="wrapper small">
                    <b className="name">구축 - 옵션B</b>
                    <div className="content">
                      욕실 벽면 줄눈시공(욕실 1개소)
                    </div>
                  </div>
                  <div className="wrapper small">
                    <b className="name">구축 - 옵션C</b>
                    <div className="content">싱크대 실리콘 오염방지 코팅</div>
                  </div>
                </div>
              </div>
              <div className="notice">
                <div className="wrapper">
                  <img src="/assets/homeclean/fillcheck-green.svg" alt="" />
                  <div className="title">
                    패키지 외 옵션은 <b className="red">단독진행이 불가</b>하며{" "}
                    {agent === "mb" ? <br /> : undefined}
                    <b>패키지와 함께 구매해주셔야 합니다</b> <br /> 무상 A/S는
                    <b> 6개월간 유효</b>합니다
                  </div>
                </div>
                <div className="wrapper">
                  <img src="/assets/homeclean/fillcheck-green.svg" alt="" />
                  <div className="title">
                    옵션가격은 <b>30*30 타일 기준이며</b>
                    {agent === "mb" ? <br /> : undefined} 30*30타일 미만일 시
                    별도의 추가비용이{agent === "mb" ? <br /> : undefined}{" "}
                    발생할 수 있으며, {agent !== "mb" ? <br /> : undefined}
                    <b>
                      실외기실·대피실·{agent === "mb" ? <br /> : undefined}
                      현관팬트리
                    </b>{" "}
                    등 별도 공간 시공시 {agent === "mb" ? <br /> : undefined}
                    추가금이 발생합니다
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Reviews
            title={`줄눈시공은
에버퓨리에 믿고 맡기세요!`}
            arr={[0, 0, 0, 0, 0, 0, 0, 0]}
            type="joint"
            nav="homeclean"
            agent={agent}
          />
          <Store agent={agent} />
        </>
      ) : now === 3 ? (
        <>
          <Summary type="bird" nav="homeclean" agent={agent} />
          <Check
            type="bird"
            circleArr={birdCheck}
            checkArr={[0, 0]}
            nav="homeclean"
            agent={agent}
          />
          {/* <CareOne
            type="bird"
            cleanArr={birdClean}
            nav="homeclean"
            agent={agent}
          /> */}
          <Slogan type="bird" nav="homeclean" agent={agent} />
          <CareTwo type="bird" arr={birdCare02} nav="homeclean" agent={agent} />
          <Point type="bird" arr={birdpointArr} agent={agent} />
          <div className="birdservice">
            <div className="pack">
              <b className="category">EVERPURI SERVICE</b>
              <b className="title">비둘기 퇴치 서비스 종류</b>
              <div className="number-wrapper">
                <div className="one">Service 01</div>
                <div className="two">Service 02</div>
                <div className="three">Service 03</div>
              </div>
              <div className="wrapper">
                <div className="card">
                  <div className="card-head">
                    <b>비둘기 분변 청소</b>
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/assets/homeclean/birdservice1.png"
                      srcSet="/assets/homeclean/birdservice1@2x.png 2x , /assets/homeclean/birdservice1@3x.png 3x"
                      alt=""
                    />
                  </div>
                </div>
                <div className="card">
                  <div className="card-head">
                    <b>비둘기 차단망 설치</b>
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/assets/homeclean/birdservice2.png"
                      srcSet="/assets/homeclean/birdservice2@2x.png 2x , /assets/homeclean/birdservice2@3x.png 3x"
                      alt=""
                    />
                  </div>
                </div>
                <div className="card">
                  <div className="card-head">
                    <b>비둘기 분변청소 + 차단망</b>
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/assets/homeclean/birdservice3.png"
                      srcSet="/assets/homeclean/birdservice3@2x.png 2x , /assets/homeclean/birdservice3@3x.png 3x"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Reviews
            title={`비둘기 퇴치는
 에버퓨리에 믿고 맡기세요!`}
            arr={[0, 0, 0, 0, 0, 0, 0, 0]}
            type="bird"
            nav="homeclean"
            agent={agent}
          />
          <Store agent={agent} />
        </>
      ) : (
        <>
          <Summary type="bug" nav="homeclean" agent={agent} />
          <Check
            type="bug"
            circleArr={bugCheck}
            checkArr={[0, 0, 0]}
            nav="homeclean"
            agent={agent}
          />
          <CareOne
            type="bug"
            cleanArr={birdClean}
            nav="homeclean"
            agent={agent}
          />
          <Slogan type="bug" nav="homeclean" agent={agent} />
          <CareTwo type="bug" arr={bugCare02} nav="homeclean" agent={agent} />
          <Point type="hood" arr={bugpoint} agent={agent} />
          <Reviews
            title={`해충·방역 서비스는
 에버퓨리에 믿고 맡기세요!`}
            arr={[]}
            type="bug"
            nav="homeclean"
            agent={agent}
          />
          <Store agent={agent} />
        </>
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
    tabletcontent: `전문 교육을 이수받은 
에버퓨리 CS마스터 팀장이 
직접 방문 및 케어`,
  },
  {
    img: "point-2",
    title: `연구개발 전담부서
인증과`,
    bold: "다수의 특허",
    content: `연구개발 전담부서 인증을 획득하고 검증된
    친환경세정제와 장비만을 사용`,
    tabletcontent: `연구개발 전담부서 인증을 
획득하고 검증된 친환경세정제와 
장비만을 사용`,
  },
  {
    img: "point-4",
    title: "서비스 품질",
    bold: "혼을 담은",
    content: `매월 1회 CS교육과 친절한 교육을 통한 
양질의 CS마스터 팀장을 양성`,
    tabletcontent: `매월 1회 CS교육과 친절한
교육을 통한 양질의 CS마스터 
팀장을 양성`,
  },
];
const bugpoint = [
  {
    img: "point-1",
    title: "에버퓨리 소속",
    bold: "CS마스터 운영",
    content: `전문 교육을 이수받은 에버퓨리
CS마스터 팀장이 직접 방문 및 케어`,
    tabletcontent: `전문 교육을 이수받은 
에버퓨리 CS마스터 팀장이 
직접 방문 및 케어`,
  },
  {
    img: "point-2",
    title: `연구개발 전담부서
인증과`,
    bold: "다수의 특허",
    content: `연구개발 전담부서 인증을 획득하고 검증된
    친환경세정제와 장비만을 사용`,
    tabletcontent: `연구개발 전담부서 인증을 
획득하고 검증된 친환경세정제와 
장비만을 사용`,
  },
  {
    img: "point-4",
    title: "서비스 품질",
    bold: "혼을 담은",
    content: `매월 1회 CS교육과 친절한 교육을 통한 
양질의 CS마스터 팀장을 양성`,
    tabletcontent: `매월 1회 CS교육과 친절한
교육을 통한 양질의 CS마스터 
팀장을 양성`,
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
    mbcontent: `아파트나 빌라 등 인테리어 공사 후의 실내청소를 
말하며, 공사시 발생한 먼지, 오염, 시멘트가루 등의 
제거를 위해 구석구석 세밀하게 청소하는 서비스`,
  },
  {
    title: "외창ㆍ외벽 청소",
    content: `건축물의 외벽을 유리·석재·금속·목조타일·벽돌·콘크리트
대리석·화강석·알루미늄·황동·목재 등으로 분류하여 오염원을 
분석 후, 각 재질의 특성에 적합한 약품 및 세제를 이용하여 
세척하는 전문적인 서비스`,
    tabletcontent: `건축물의 외벽을 유리·석재·금속·목조타일·벽돌
콘크리트·대리석·화강석·알루미늄·황동·목재 등으로 
분류하여 오염원을 분석 후, 각 재질의 특성에 적합한 
약품 및 세제를 이용하여 세척하는 전문적인 서비스`,
    mbcontent: `건축물의 외벽을 유리·석재·금속·목조타일·벽돌
콘크리트·대리석·화강석·알루미늄·황동·목재 등으로 
분류하여 오염원을 분석 후, 각 재질의 특성에 적합한 
약품 및 세제를 이용하여 세척하는 전문적인 서비스`,
  },
];
const homeCheck = [
  { img: "germ", title: "각종 세균 번식" },
  {
    img: "itching",
    title: `알레르기성
질환 유발`,
  },
  { img: "kid", title: "호흡기 질환 영향" },
];
const jointCheck = [
  { img: "germ", title: "각종 세균 번식" },
  {
    img: "itching",
    title: `알레르기성
질환 유발`,
  },
  { img: "illness", title: "호흡기 질환 영향" },
];
const birdCheck = [
  { img: "germ", title: "각종 세균 번식" },
  {
    img: "cold",
    title: `알레르기성
질환 유발`,
  },
  { img: "illness", title: "호흡기 질환 영향" },
  { img: "bird", title: "실외기 부식" },
];
const bugCheck = [
  { img: "illness", title: "새집증후군 발생" },
  {
    img: "head",
    title: `질병 및
전염병의 원인`,
  },
  { img: "fly", title: "해충 번식" },
];
const matClean = [
  {
    img: "matclean1",
    title: "매트리스 라돈 측정",
  },
  {
    img: "matclean2",
    title: "매트리스 바디 2면 케어",
  },
  {
    img: "matclean3",
    title: "매트리스 측4면 케어",
  },
  {
    img: "matclean4",
    title: "UV자외선 살균",
  },
  {
    img: "matclean5",
    title: "진드기 패치 부착",
  },
  {
    img: "matclean6",
    title: "피톤치드 연무살균",
  },
];
const jointClean = [
  {
    img: "jointclean1",
    title: "백시멘트 제거",
  },
  {
    img: "jointclean2",
    title: "백시멘트 가루 제거",
  },
  {
    img: "jointclean3",
    title: "마스킹테이프 부착",
  },
  {
    img: "jointclean4",
    title: "친환경 줄눈제 시공",
  },
  {
    img: "jointclean5",
    title: "시공 완료",
  },
];
const birdClean = [];
const matCare02 = [
  {
    img: "/assets/homeclean/care2-1.svg",
    title: `피부질환
예방`,
    sub: `침대는 하루 중 가장 많은
시간을 보내는 공간으로
피부와 가장 오래 맞닿아있기 때문에
피부질환에 유의해야합니다.`,
    mbsub: `침대는 하루 중 가장 많은 시간을 보내는 
공간으로 피부와 가장 오래 맞닿아있기 
때문에 피부질환에 유의해야합니다.`,
  },
  {
    img: "/assets/homeclean/care2-2.svg",
    title: `매트리스 노폐물 
오염 제거`,
    sub: `잠을 잘 때 우리 몸의 모공에서
배출되는 노폐물은
박테리아 및 집먼지진드기가
번식하기 좋은 환경이 됩니다.
.`,
    mbsub: `잠을 잘 때 우리 몸의 모공에서 배출되는 
노폐물은 박테리아 및 집먼지진드기가 
번식하기 좋은 환경이 됩니다.`,
  },
  {
    img: "/assets/homeclean/care2-3.svg",
    title: `각종 세균 및 집먼지
진드기 제거`,
    sub: `집먼지진드기의 배설물과
사체 잔해가 아토피, 천식, 비염과
같은 각종 알레르기성 질환을
유발하게 됩니다.
 `,
    mbsub: `집먼지진드기의 배설물과 사체 잔해가 아토피, 
천식, 비염과 같은 각종 알레르기성 질환을
유발하게 됩니다.`,
  },
  {
    img: "/assets/homeclean/care2-4.svg",

    title: `집먼지
진드기 사체 제거`,
    sub: `해충박멸 스프레이로 죽인
진드기의 사체 또한
깨끗하게 제거하여야합니다.`,
    mbsub: `해충박멸 스프레이로 죽인 진드기의 사체 
또한 깨끗하게 제거하여야합니다.`,
  },
];
const jointCare02 = [
  {
    img: "/assets/homeclean/care2-5.svg",
    title: `인테리어 효과`,
    sub: `작은 시공으로도 충분한
인테리어 효과를 누릴 수 있습니다`,
  },
  {
    img: "/assets/homeclean/care2-6.svg",
    title: `친환경 줄눈제`,
    sub: `항균제 곰팡이 방지제 첨가 및
향균기능으로 세균증식과 발육을
억제합니다 `,
  },
];
const birdCare02 = [
  {
    img: "/assets/homeclean/care2-7.svg",
    title: `질병 및 화재 발생 예방`,
    sub: `비둘기는 환경오염과 전염병의 원인이며,
둥지의 나뭇가지 및 종이로 인하여 화재 발생의 
가능성이 있습니다`,
    tabletsub: `비둘기는 환경오염과 전염병의
원인이며, 둥지의 나뭇가지 및 종이로 
인하여 화재 발생의 
가능성이 있습니다`,
    mbsub: `비둘기는 환경오염과 전염병의 원인이며, 
둥지의 나뭇가지 및 종이로 인하여 
화재 발생의 가능성이 있습니다`,
  },
  {
    img: "/assets/homeclean/care2-8.svg",
    title: `반영구적으로 사용가능`,
    sub: `비둘기는 귀소본능이 강해 청소 후
차단망 설치는 필수입니다. 비둘기 차단망은
한번 설치 시 비둘기 퇴치에 반영구적으로
사용이 가능합니다.`,
    tabletsub: `비둘기는 귀소본능이 강해 청소 후
차단망 설치는 필수입니다. 
비둘기 차단망은 한번 설치 시 
비둘기 퇴치에 반영구적으로
사용이 가능합니다`,
    mbsub: `비둘기는 귀소본능이 강해 청소 후 차단망 
설치는 필수입니다. 비둘기 차단망은 한번 
설치 시 비둘기 퇴치에 반영구적으로
사용이 가능합니다`,
  },
  {
    img: "/assets/homeclean/care2-9.svg",
    title: `맞춤 제작 가능`,
    sub: `최고급 PE망으로 어떤 사이즈의
실외기라도 맞춤 제작이 가능합니다.`,
    mbsub: `최고급 PE망으로 어떤 사이즈의 실외기라도
맞춤 제작이 가능합니다.`,
  },
];
const bugCare02 = [
  {
    img: "/assets/homeclean/care2-1.svg",
    title: `주변 환경을 청결 및
오염원을 근절`,
    sub: `99.9% 향균력을 가진 친환경 소독제를
이용하여 주변 환경에 있는
세균 및 바이러스 등 오염원을 근절시킵니다.`,
    tabletsub: `99.9% 향균력을 가진 친환경
소독제를 이용하여 주변 환경에 있는
세균 및 바이러스 등 오염원을 
근절시킵니다.`,
    mbsub: `99.9% 향균력을 가진 친환경 소독제를 
이용하여 주변 환경에 있는 세균 및 
바이러스 등 오염원을 근절시킵니다.`,
  },
  {
    img: "/assets/homeclean/care2-4.svg",
    title: `각종 병원균 및 
유해충의 서식환경 퇴치`,
    sub: `주변 환경의 오염원을 근절시켜
해충이 서식할 환경을 차단하고
보다 쾌적한 환경을 만듭니다.`,
    mbsub: `주변 환경의 오염원을 근절시켜 해충이 
서식할 환경을 차단하고 보다 쾌적한
환경을 만듭니다.`,
  },
  {
    img: "/assets/homeclean/care2-3.svg",
    title: `철저한 보건 위생 방역으로
각종 질병을 사전에 예방`,
    sub: `철저한 보건 위생 방역으로
코로나 및 각종 질병 및 전염병을
사전에 예방할 수 있습니다.`,
    mbsub: `철저한 보건 위생 방역으로 코로나 및 각종 
질병 및 전염병을 사전에 예방할 수 있습니다.`,
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
const jointpointArr = [
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
    img: "point-7",
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
const birdpointArr = [
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
    img: "point-10",
    title: "완벽 서비스",
    bold: "고온스팀살균으로",
    content: `고온스팀살균으로
완벽 소독 살균 서비스를 제공`,
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
