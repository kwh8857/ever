import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Tel from "../../components/Tel/Tel";
import "./css/index.css";
function Partner({ agent }) {
  const location = useLocation();
  const [now, setNow] = useState(0);
  useEffect(() => {
    if (location.state) {
      document.getElementById("root").scrollTo(0, 0);
    }

    return () => {};
  }, [location]);

  return (
    <main className="partner">
      <div className="banner">
        <div className="title">창업 교육 및 파트너 제휴</div>
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
          <div className="section1">
            <div className="pack">
              <div className="top">
                <div className="left">
                  <div className="category">CARE PROFESSIONAL</div>
                  <div className="title">
                    에버퓨리는{" "}
                    <b>
                      직영 교육장을 통해 <br /> 케어 전문가를 양성
                    </b>
                    합니다
                  </div>
                  <div className="sub">
                    홈케어 서비스를 통해 고객님의 건강한 삶에 <br /> 이바지 할
                    수 있도록 최선을 다하겠습니다.
                  </div>
                </div>
                <img
                  className="right"
                  src="/assets/partner/professional.png"
                  srcSet="/assets/partner/professional@2x.png 2x , /assets/partner/professional@3x.png 3x"
                  alt=""
                />
              </div>
              <div className="bottom">
                {section1Arr.map(({ title, img }, idx) => {
                  return (
                    <div key={idx} className="card">
                      <img src={img} alt="" />
                      <div className="title">{title}</div>
                      <div className="sub">
                        {idx === 0 ? (
                          <>
                            체계적인 교육을 통해{" "}
                            {agent === "pc" ? <br /> : undefined} 에버
                            {agent === "tablet" ? (
                              <br />
                            ) : undefined}퓨리만의{" "}
                            {agent === "mb" ? <br /> : undefined}
                            <b>
                              친환경 청소와{" "}
                              {agent !== "mb" ? <br /> : undefined} 시공 기술을
                              전수
                            </b>
                            합니다
                          </>
                        ) : idx === 1 ? (
                          <>
                            <b>
                              4주 간의 이론 교육과 실습·
                              {agent === "tablet" ? <br /> : undefined}현장{" "}
                              {agent === "pc" ? <br /> : undefined} 동행
                            </b>
                            을 통해 전문
                            {agent !== "pc" ? <br /> : undefined}기술을 익힐 수{" "}
                            {agent === "pc" ? <br /> : undefined} 있습니다.
                            {agent === "tablet" ? <br /> : undefined} 관련 분야
                            경험이 없고, <br />
                            <b>
                              힘쓰는 일에 자신이
                              {agent === "tablet" ? (
                                <br />
                              ) : undefined} 없더라도{" "}
                              {agent === "pc" ? <br /> : undefined} 케어전문가로{" "}
                              {agent !== "pc" ? <br /> : undefined}거듭
                            </b>
                            날 수 있습니다.
                          </>
                        ) : idx === 2 ? (
                          <>
                            에버퓨리 기술은{" "}
                            {agent === "tablet" ? <br /> : undefined}
                            <b>
                              힘보다는 {agent === "pc" ? <br /> : undefined}{" "}
                              꼼꼼함이 필요한{" "}
                              {agent !== "pc" ? <br /> : undefined} 공정
                            </b>
                            으로 여성이 {agent === "pc" ? <br /> : undefined}{" "}
                            하기에도 {agent === "tablet" ? <br /> : undefined}
                            적합합니다.
                          </>
                        ) : (
                          <>
                            고객님 댁의 건강을 지킨다
                            {agent === "tablet" ? <br /> : undefined}는{" "}
                            {agent === "pc" ? <br /> : undefined} 마음으로{" "}
                            <b>
                              서비스를 {agent !== "pc" ? <br /> : undefined}
                              제공할 열정을{" "}
                              {agent === "pc" ? <br /> : undefined} 가진 많은{" "}
                              {agent === "tablet" ? <br /> : undefined}분들
                              도전을 기대
                            </b>
                            합니다
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="back" />
          </div>
          <div className="section2">
            <div className="pack">
              <div className="back first">
                <div />
              </div>
              <div className="back second">
                <div />
              </div>
              <div className="one">
                <div className="title">
                  대구·경북 <br /> <b>최대 규모의 교육장</b>
                </div>
                <div className="sub">
                  넓고 쾌적한 환경으로 교육에 더욱 집중할 수 있습니다.
                </div>
                <div className="img-wrapper">
                  {section2Img1.map((item, idx) => {
                    return (
                      <img
                        alt=""
                        src={`/asssets/partner/${item}.png`}
                        srcSet={`/assets/partner/${item}@2x.png 2x , /assets/partner/${item}@3x.png 3x`}
                        key={idx}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="two">
                <div className="title">
                  다양한 기종 보유로 <br /> <b>다양한 경험을</b>
                </div>
                <div className="sub">
                  같은 품목이라도 기종마다 구조가 다릅니다. <br /> 에버퓨리는
                  여러 기종의 제품 보유로 {agent !== "pc" ? <br /> : undefined}{" "}
                  다양한 경험을 쌓으실 수 있습니다
                </div>
                <div className="img-wrapper">
                  {section2Img2.map((item, idx) => {
                    return (
                      <img
                        alt=""
                        src={`/asssets/partner/${item}.png`}
                        srcSet={`/assets/partner/${item}@2x.png 2x , /assets/partner/${item}@3x.png 3x`}
                        key={idx}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="section3">
            <div className="pack">
              <div className="back">
                <div />
              </div>
              <div className="category">PARTNERSHIP</div>
              <div className="title">
                창업 시 <b>지원 사항</b>
              </div>
              <div className="list">
                {section3Arr.map(({ title, img, name }, idx) => {
                  return (
                    <div key={idx} className={`card ${name}`}>
                      <img
                        src={`/assets/partner/${img}.png`}
                        srcSet={`/assets/partner/${img}@2x.png 2x , /assets/partner/${img}@3x.png 3x`}
                        alt=""
                      />
                      <div className="content">
                        <div className="title">
                          {title}
                          <div className="number">0{idx + 1}</div>
                        </div>
                        <div className="sub">
                          {name === "first" ? (
                            <>
                              바이러스, 미세먼지, 발암물질 처리 등 시대적{" "}
                              {agent === "tablet" ? <br /> : undefined}흐름에
                              {agent !== "tablet" ? <br /> : undefined}
                              맞는 기술을 개발해 현장에 적용할 수
                              {agent === "tablet" ? <br /> : undefined} 있도록
                              <b>
                                {" "}
                                지속적인{" "}
                                {agent !== "tablet" ? <br /> : undefined}
                                교육을 무상 제공
                              </b>
                              합니다.{agent === "tablet" ? (
                                <br />
                              ) : undefined}{" "}
                              특히 최신 가전제품에 맞는
                              {agent !== "tablet" ? <br /> : undefined}
                              기술 정보를 계속
                              {agent === "tablet" ? <br /> : undefined}{" "}
                              업그레이드 해 당황하지 않고{" "}
                              <b>
                                어떤
                                {agent !== "tablet" ? <br /> : undefined}
                                현장에서건
                                {agent === "tablet" ? <br /> : undefined} 최고의
                                청소 효과를 낼 수 있도록 돕겠습니다.
                              </b>
                            </>
                          ) : name === "second" ? (
                            <>
                              예비 사장님께서 주문에 대한 걱정 없이 케어
                              {agent === "tablet" ? <br /> : undefined}
                              서비스에 {agent !== "tablet" ? (
                                <br />
                              ) : undefined}{" "}
                              임하실 수 있도록{" "}
                              <b>
                                고객 유치를 위한
                                {agent === "tablet" ? <br /> : undefined} 홍보를
                                지원
                              </b>{" "}
                              합니다. <br />
                              <b>
                                기업, 관공서에 에버퓨리 케어서비스를 제안하고
                                {agent === "tablet" ? <br /> : undefined}
                                각종 {agent !== "tablet" ? (
                                  <br />
                                ) : undefined}{" "}
                                광고를 통해 일반 소비자들이 쉽게 찾아올
                                {agent === "tablet" ? <br /> : undefined} 수
                                있도록
                              </b>
                              {agent !== "tablet" ? <br /> : undefined}{" "}
                              에버퓨리가 최선을 다하겠습니다.
                            </>
                          ) : (
                            <>
                              견적서 등 서류 작업이 필요할 경우{" "}
                              {agent !== "mb" ? <br /> : undefined}
                              <b>
                                에버퓨리에서{" "}
                                {agent === "mb" ? <br /> : undefined}작성 요령을
                                제공
                              </b>{" "}
                              합니다.
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <Tel />
        </>
      ) : (
        <></>
      )}
    </main>
  );
}

export default Partner;
const navArr = ["창업 교육", "파트너 제휴"];
const section1Arr = [
  {
    title: `체계적인
교육`,

    img: "/assets/partner/section1-1.svg",
  },
  {
    title: `4주 간의
실습·현장동행`,
    img: "/assets/partner/section1-2.svg",
  },
  {
    title: `힘보다는
꼼꼼함`,
    img: "/assets/partner/section1-3.svg",
  },
  {
    title: `건강을 
지킨다는 마음`,
    img: "/assets/partner/section1-4.svg",
  },
];
const section2Img1 = ["section2-1", "section2-2", "section2-3"];
const section2Img2 = ["section2-3", "section2-4", "section2-5"];
const section3Arr = [
  {
    title: "최신 기술 및 CS 무상 교육",
    img: "section3-1",
    name: "first",
  },
  {
    title: "고객 유치 홍보 지원",
    img: "section3-2",
    name: "second",
  },
  {
    title: "행정기관 및 기업 서비스 시 서류 작업 지원",
    img: "section3-3",
    name: "third",
  },
];
