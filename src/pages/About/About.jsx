import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "../../components/Map/Map";
import Nav from "../../components/Nav/Nav";
import Sponsor from "../../components/Sponsor/Sponsor";
import "./css/index.css";
function About({ agent }) {
  const location = useLocation();
  const [now, setnow] = useState(0);
  useEffect(() => {
    if (location.state) {
      document.getElementById("root").scrollTo(0, 0);
      setnow(location.state - 1);
    }
    return () => {};
  }, [location]);

  return (
    <main className="about">
      <Nav
        now={now}
        setnow={setnow}
        navArr={navArr}
        agent={agent}
        type="about"
      />
      {now === 0 ? (
        <div className="ceo">
          <div className="section1">
            {agent === "mb" ? (
              <div className="pack">
                <div className="title">
                  안녕하십니까 <br />
                  <b>
                    고객의 환경과 건강을 <br /> 생각하는
                  </b>
                  에버퓨리입니다
                </div>
              </div>
            ) : undefined}
            <div className="bottom">
              <div className="pack">
                <div className="content">
                  {agent !== "mb" ? (
                    <>
                      <b className="subject">CEO 인사말</b>
                      <div className="title">
                        안녕하십니까
                        <b>
                          고객의 환경과 <br /> 건강을 생각하는
                        </b>
                        에버퓨리입니다
                      </div>
                    </>
                  ) : undefined}
                </div>
                <img
                  src="/assets/about/ceo.png"
                  srcSet="/assets/about/ceo@2x.png 2x ,/assets/about/ceo@3x.png 3x"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="pack">
              <div className="list">
                <div className="box">
                  <img
                    src="/assets/about/ceo-1.png"
                    srcSet="/assets/about/ceo-1@2x.png 2x ,/assets/about/ceo-1@3x.png 3x"
                    alt=""
                  />
                  <div className="content">
                    <div className="title">
                      {agent !== "mb" ? (
                        <>
                          {" "}
                          <b>내 가족의 건강을 지키고 싶다</b>는 <br /> 마음으로
                          현장을 누비고 있습니다.
                        </>
                      ) : (
                        <>
                          <b>다양한 환경에 맞는</b> <br /> 에버퓨리를 만나보세요
                        </>
                      )}
                    </div>
                    <div className="subject">
                      <b>내 가족의 건강을 지키고 싶다는 마음</b>으로 현장을{" "}
                      {agent === "mb" ? <br /> : undefined}
                      누비고 있습니다. {agent !== "mb" ? (
                        <br />
                      ) : undefined}{" "}
                      미세먼지, 발암물질, 바이러스까지.{" "}
                      {agent === "mb" ? <br /> : undefined}
                      현대인은 거듭해 오염된 환경에{" "}
                      {agent === "tablet" ? <br /> : undefined} 노출되고
                      있습니다. {agent !== "tablet" ? <br /> : undefined}
                      청소도 전문가에게 맡겨야 하는 이유입니다.
                    </div>
                  </div>
                </div>
                <div className="line" />
                <div className="box second">
                  <img
                    src="/assets/about/ceo-2.png"
                    srcSet="/assets/about/ceo-2@2x.png 2x ,/assets/about/ceo-2@3x.png 3x"
                    alt=""
                  />
                  <div className="content">
                    <div className="title">
                      수천 곳의 가정과 기업을{" "}
                      {agent === "mb" ? <br /> : undefined} 누비며{" "}
                      {agent !== "mb" ? <br /> : undefined}
                      <b>풍부한 현장 노하우</b>도{" "}
                      {agent === "mb" ? <br /> : undefined} 쌓았습니다.
                    </div>
                    <div className="subject">
                      <b>체계적인 교육을 받은 에버퓨리 케어 전문가</b>가{" "}
                      {agent === "mb" ? <br /> : undefined} 기업은 물론 각
                      가정으로 찾아갑니다. <br />
                      <b>에버퓨리 케어 전문가</b>들은 고객님의 믿은 덕분에
                      <br /> 수천 곳의 가정과 기업을 누비며{" "}
                      {agent === "mb" ? <br /> : undefined} 풍부한 현장 노하우도
                      쌓았습니다.
                    </div>
                  </div>
                </div>
                <div className="line" />
                <div className="box third">
                  <img
                    src="/assets/about/ceo-3.png"
                    srcSet="/assets/about/ceo-3@2x.png 2x ,/assets/about/ceo-3@3x.png 3x"
                    alt=""
                  />
                  <div className="content">
                    <div className="title">
                      고객님의 깨끗하고 <br />
                      <b>
                        건강한 공간을 위해 {agent === "mb" ? <br /> : undefined}
                        힘쓰겠습니다.
                      </b>
                    </div>
                    <div className="subject">
                      <b>
                        직영 교육장·기술 연구부·확실한 사후 A/S체계{" "}
                        {agent === "mb" ? <br /> : undefined}.
                      </b>
                      3박자를 고루 갖춘 에버퓨리는{" "}
                      {agent === "tablet" ? <br /> : undefined} 고객께서{" "}
                      {agent === "pc" ? <br /> : undefined} 다시{" "}
                      {agent === "mb" ? <br /> : undefined}찾을 수 있는 청소,
                      방역 서비스를 해드릴 수 있도록{" "}
                      {agent === "mb" ? <br /> : undefined} 거듭{" "}
                      {agent === "tablet" ? <br /> : undefined} 노력하겠습니다.{" "}
                      {agent === "pc" ? <br /> : undefined}
                      에버퓨리는 고객님들의 건강한 삶에{" "}
                      {agent === "mb" ? <br /> : undefined} 책임을 느낍니다.{" "}
                      {agent !== "mb" ? <br /> : undefined}
                      인체에 무해한 친환경 약품만을 사용하며,{" "}
                      {agent === "mb" ? <br /> : undefined} 정확한 청소 공정을
                      지킬 것을 약속드립니다. <br /> 고객님의 깨끗하고 건강한
                      공간을 위해 힘쓰겠습니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="name">
                주식회사 에버퓨리 <b>대표이사 고혜경</b>
              </div>
              <img
                src="/assets/about/background.png"
                srcSet="/assets/about/background@2x.png 2x ,/assets/about/background@3x.png 3x"
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="company">
          <div className="section1">
            <div className="pack">
              <b className="subject">WHO WE ARE</b>
              <div className="title">
                <b>
                  고객의 환경과 건강을{agent === "mb" ? <br /> : undefined}{" "}
                  생각하는 마음으로
                </b>{" "}
                <br /> 최선을 다하는 기업,{agent === "mb" ? <br /> : undefined}{" "}
                에버퓨리
              </div>
              <div className="content">
                에버퓨리는 고객님의 쾌적하고 건강한 생활을 위해 진심을
                {agent === "mb" ? <br /> : undefined} 다해 연구하고 노력하는
                기업입니다. {agent !== "mb" ? <br /> : undefined} 관공서 기업,
                학교,
                {agent === "mb" ? <br /> : undefined} 의료복지시설 건물관리와
                에어컨 유지 보수 관리를{agent === "mb" ? <br /> : undefined}{" "}
                책임지고 맡고 있으며, {agent !== "mb" ? <br /> : undefined}{" "}
                가정집 홈케어 서비스를 전문으로
                {agent === "mb" ? <br /> : undefined}
                고객 감동을 실현할 것을 약속드립니다
              </div>
              <div className="circle-wrapper">
                <div className="circle first">
                  <b className="title">신뢰</b>
                  <div className="content">
                    합리적인 가격과 <br /> 전문적인 서비스 및 AS로 <br /> 신뢰를
                    드리겠습니다
                  </div>
                </div>
                <div className="circle blue">
                  <b className="title">건강</b>
                  <div className="content">
                    보건소 공인 테스트를 <br /> 통과한 본사 직영기사만 <br />
                    고객님께 방문 드리겠습니다
                  </div>
                </div>
                <div className="circle third">
                  <b className="title">감동</b>
                  <div className="content">
                    단순 서비스가 아닌 <br /> 고객님의 건강과 행복한 <br />{" "}
                    생활을 위해 진심을 다합니다
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="pack">
              <img
                className="background"
                src="/assets/about/company.png"
                srcSet="/assets/about/company@2x.png 2x ,/assets/about/company@3x.png 3x"
                alt=""
              />
              <div className="title-wrapper">
                <b className="cat">VISION</b>
                <div className="title">
                  에버퓨리는 고객님의 {agent === "mb" ? <br /> : undefined}
                  <b>
                    삶의 질을 {agent !== "mb" ? <br /> : undefined} 높이기 위해
                    {agent === "mb" ? <br /> : undefined} 존재
                  </b>
                  합니다
                </div>
              </div>
              <div className="list">
                {layout.map(({ number, bold, sub }, idx) => {
                  return (
                    <div key={idx} className="wrapper">
                      <div className="number">{number}</div>
                      <span className="content">
                        <b>
                          {bold}
                          <div className="line" />
                        </b>
                        {sub}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="section3">
            <div className="pack">
              <div className="title-wrapper">
                <div className="category">SERVICE</div>
                <div className="title">
                  더이상 비교할 {agent === "mb" ? <br /> : undefined} 필요가
                  없습니다 <br />
                  <b>
                    에버퓨리만의{agent === "mb" ? <br /> : undefined} 특별한
                    서비스
                  </b>
                </div>
              </div>
              <div className="list">
                {serviceLayout.map(
                  ({ img, title, content, tablet, mb }, idx) => {
                    return (
                      <div className="card" key={idx}>
                        <img src={img} alt="" />
                        <div className="content">
                          <div className="title">{title}</div>
                          {agent !== "mb" ? (
                            <div className="line" />
                          ) : undefined}
                          <div className="content">
                            {agent === "tablet" && tablet
                              ? tablet
                              : agent === "mb"
                              ? mb
                              : content}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="section4">
            <div className="pack">
              <b className="category">PROFESSIONAL</b>
              <b className="title">
                에버퓨리는 {agent !== "mb" ? <br /> : undefined} 인증된 전문{" "}
                {agent === "mb" ? <br /> : undefined} 서비스를 제공합니다
              </b>
              <div className="sub">
                흉내만 내는 단순 청소업체와 달리, 사후관리와
                {agent === "mb" ? <br /> : undefined}
                책임시공이라는 책임감을 갖고 서비스를 제공합니다. <br />{" "}
                에버퓨리에서 제공하는 서비스는 기술, 만족입니다.
                {agent === "mb" ? <br /> : undefined} 철저한 기술연마와
                서비스정신으로 최선을 다하겠습니다.
              </div>
              <div className="list">
                {docLayout.map(({ img, name }, idx) => {
                  return (
                    <div key={idx} className="doc">
                      <img
                        src={`/assets/about/${img}.png`}
                        srcSet={`/assets/about/${img}@2x.png 2x, /assets/about/${img}@3x.png 3x`}
                        alt={name}
                      />
                      <div className="name">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {agent !== "mb" ? (
              <div className="back" />
            ) : (
              <div className="back-list">
                <div className="back" />
                <div className="back" />
                <div className="back" />
              </div>
            )}
          </div>
          <Sponsor type="about" agent={agent} />
          <Map agent={agent} />
        </div>
      )}
    </main>
  );
}

export default About;

const navArr = ["CEO 인사말", "회사소개"];
const layout = [
  {
    number: "01",
    bold: "전문 홈케어 매니저로 ",
    sub: "믿을 수 있는 서비스",
  },
  {
    number: "02",
    bold: "서비스 만족을 최우선",
    sub: "으로 생각하는 기업",
  },
  {
    number: "03",
    bold: "전문장비를 이용한 ",
    sub: "철저한 살균과 소독",
  },
  {
    number: "04",
    bold: "수년간의 축적된 노하우로 ",
    sub: "차별화된 서비스",
  },
];
const serviceLayout = [
  {
    img: "/assets/about/service-1.svg",
    title: "케어 전문가",
    content: `에버퓨리는 직영 교육장을 통해 양성한 케어전문가가 고객님을 찾아갑니다.
철저한 교육을 통해 최상의 서비스를 제공합니다.
또한 지속적인 재교육으로 서비스 품질 유지에 힘쓰고있습니다.`,
    mb: `에버퓨리는 직영 교육장을 통해 양성한 케어전문가가
고객님을 찾아갑니다. 철저한 교육을 통해 최상의 
서비스를 제공합니다. 또한 지속적인 재교육으로
서비스 품질 유지에 힘쓰고있습니다.`,
  },
  {
    img: "/assets/about/service-2.svg",
    title: "정직한 서비스",
    content: `에버퓨리는 직영 시스템으로 운영됩니다.
철저한 검증을 거친 케어전문가들로 구성되어있어 안심하고 댁에서 서비스를 받으실 수 있습니다.
오직 고객의 건강만을 생각하며 까다로운 단계별 공정을 지키고 인체에 무해한 친환경 약품과 장비만을 사용합니다.`,
    tablet: `에버퓨리는 직영 시스템으로 운영됩니다. 철저한 검증을 거친 케어전문가들로 구성되어있어 
안심하고 댁에서 서비스를 받으실 수 있습니다. 오직 고객의 건강만을 생각하며 까다로운 
단계별 공정을 지키고 인체에 무해한 친환경 약품과 장비만을 사용합니다.`,
    mb: `에버퓨리는 직영 시스템으로 운영됩니다. 
철저한 검증을 거친 케어전문가들로 구성되어 있어
안심하고 댁에서 서비스를 받으실 수 있습니다. 
오직 고객의 건강만을 생각하며 까다로운 단계별 
공정을 지키고 인체에 무해한 친환경 약품과 
장비만을 사용합니다.`,
  },
  {
    img: "/assets/about/service-3.svg",
    title: "완벽한 사후관리",
    content: `에버퓨리 제공 서비스가 만족스럽지 못할 경우 3개월 무상 A/S서비스를 받으실 수 있습니다.
케어 전문가가 재방문하여 놓쳤던 부분을 꼼꼼하게 살펴드립니다.
당사는 1억원 배상 손해보험에 가입되어있습니다.`,
    mb: `에버퓨리 제공 서비스가 만족스럽지 못할 경우 3개월
무상 A/S서비스를 받으실 수 있습니다. 케어 전문가가 
재방문하여 놓쳤던 부분을 꼼꼼하게 살펴드립니다.
당사는 1억원 배상 손해보험에 가입되어있습니다.`,
  },
  {
    img: "/assets/about/service-4.svg",
    title: "끊임없는 기술 혁신",
    content: `에버퓨리는 기술 연구부서를 운영하여 보다 발전된 건강 케어 서비스를 제공합니다.
기술연구부는 친환경 청소와 시공, 다양한 장비와 친환경 약품 개발에 매진하고 있습니다.
앞서가는 친환경 기술과 고객 맞춤형 서비스를 제공합니다.`,
    mb: `에버퓨리는 기술 연구부서를 운영하여 보다 발전된
건강 케어 서비스를 제공합니다. 기술연구부는 
친환경 청소와 시공, 다양한 장비와 친환경 약품 
개발에 매진하고 있습니다. 앞서가는 친환경 기술과 
고객 맞춤형 서비스를 제공합니다.`,
  },
];
const docLayout = [
  {
    img: "doc1",
    name: `경쟁입찰참가
자격등록증`,
  },
  {
    img: "doc2",
    name: "직접생산확인증명서",
  },
  {
    img: "doc3",
    name: "소독업 신고증",
  },
  {
    img: "doc4",
    name: "영업신고증",
  },
  {
    img: "doc5",
    name: "통신판매업신고증",
  },
  {
    img: "doc6",
    name: `건강기능식품
영업신고증`,
  },
  {
    img: "doc7",
    name: "여성기업 확인서",
  },
  {
    img: "doc8",
    name: `시스템에어컨
종합세척관리사`,
  },
  {
    img: "doc9",
    name: "사업자등록증",
  },
];
