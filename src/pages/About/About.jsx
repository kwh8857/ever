import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import "./css/index.css";
function About() {
  const [now, setnow] = useState(0);
  return (
    <main className="about">
      <Nav now={now} setnow={setnow} navArr={navArr} />
      {now === 0 ? (
        <div className="ceo">
          <div className="section1">
            <div className="bottom">
              <div className="pack">
                <div className="content">
                  <b className="subject">CEO 인사말</b>
                  <div className="title">
                    안녕하십니까
                    <b>
                      고객의 환경과 <br /> 건강을 생각하는
                    </b>
                    에버퓨리입니다
                  </div>
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
                      <b>내 가족의 건강을 지키고 싶다</b>는 <br /> 마음으로
                      현장을 누비고 있습니다.
                    </div>
                    <div className="subject">
                      <b>내 가족의 건강을 지키고 싶다는 마음</b>으로 현장을
                      누비고 있습니다. <br /> 미세먼지, 발암물질, 바이러스까지.
                      현대인은 거듭해 오염된 환경에 노출되고 있습니다. <br />
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
                      수천 곳의 가정과 기업을 누비며 <br />
                      <b>풍부한 현장 노하우</b>도 쌓았습니다.
                    </div>
                    <div className="subject">
                      <b>체계적인 교육을 받은 에버퓨리 케어 전문가</b>가 기업은
                      물론 각 가정으로 찾아갑니다. <br />
                      <b>에버퓨리 케어 전문가</b>들은 고객님의 믿은 덕분에
                      <br /> 수천 곳의 가정과 기업을 누비며 풍부한 현장 노하우도
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
                      <b>건강한 공간을 위해 힘쓰겠습니다.</b>
                    </div>
                    <div className="subject">
                      <b>직영 교육장·기술 연구부·확실한 사후 A/S체계.</b>
                      3박자를 고루 갖춘 에버퓨리는 고객께서 <br /> 다시 찾을 수
                      있는 청소, 방역 서비스를 해드릴 수 있도록 거듭
                      노력하겠습니다. <br />
                      에버퓨리는 고객님들의 건강한 삶에 책임을 느낍니다. <br />
                      인체에 무해한 친환경 약품만을 사용하며, 정확한 청소 공정을
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
                <b>고객의 환경과 건강을 생각하는 마음으로</b> <br /> 최선을
                다하는 기업, 에버퓨리
              </div>
              <div className="content">
                에버퓨리는 고객님의 쾌적하고 건강한 생활을 위해 진심을 다해
                연구하고 노력하는 기업입니다. <br /> 관공서 기업, 학교,
                의료복지시설 건물관리와 에어컨 유지 보수 관리를 책임지고 맡고
                있으며, <br /> 가정집 홈케어 서비스를 전문으로 고객 감동을
                실현할 것을 약속드립니다
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
                  에버퓨리는 고객님의
                  <b>
                    삶의 질을 <br /> 높이기 위해 존재
                  </b>
                  합니다
                </div>
              </div>
              <div className="list">
                {layout.map(({ number, bold, sub }, idx) => {
                  return (
                    <div key={idx} className="wrapper">
                      <span className="number">{number}</span>
                      <span className="content">
                        <b>{bold}</b>
                        {sub}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
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
