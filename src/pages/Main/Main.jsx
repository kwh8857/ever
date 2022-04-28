import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Floating from "../../components/Floating/Floating";
import Sponsor from "../../components/Sponsor/Sponsor";
import Store from "../../components/Store/Store";
import Tel from "../../components/Tel/Tel";
import "./css/index.css";
import Card from "./transition/Card";
import Section2 from "./transition/Section2";
function Main({ agent }) {
  const navigate = useNavigate();
  const handleScroll = useCallback(([entry], dom) => {
    const { current } = dom;
    if (current && entry.isIntersecting) {
      current.style.transitionProperty = "opacity ,transform";
      current.style.transitionDuration = "0.7s";
      current.style.transitionTimingFunction = "ease";
      current.style.transitionDelay = `0.3s`;
      current.style.opacity = "1";
      current.style.transform = "translate3d(0, 0, 0)";
    }
  }, []);
  return (
    <main className="main">
      <Floating agent={agent} />
      <div className="section1">
        <div className="pack">
          <b>
            고객의 환경과 건강을 <br /> 생각하는 마음으로 <br />
            최선을 다하는 기업 <br />
            에버퓨리
          </b>
          <div className="line one" />
          <div className="line two" />
        </div>
      </div>
      <Section2 agent={agent} handleScroll={handleScroll} />
      <div className="section3">
        <div className="pack">
          <span className="title">
            <b>다양한 환경에 맞는</b> {agent !== "mb" ? <br /> : undefined}{" "}
            에버퓨리를 만나보세요
          </span>
          <section className="wrapper">
            {section3_layout.map((item, idx) => {
              return (
                <Card
                  key={idx}
                  data={item}
                  agent={agent}
                  idx={idx}
                  handleScroll={handleScroll}
                />
              );
            })}
          </section>
        </div>
      </div>
      <div className="section4">
        {agent === "mb" ? (
          <img
            src={`/assets/main/section4${agent === "mb" ? agent : ""}.png`}
            srcSet={`/assets/main/section4${
              agent === "mb" ? agent : ""
            }@2x.png 2x , /assets/main/section4${
              agent === "mb" ? agent : ""
            }@3x.png 3x`}
            alt=""
          />
        ) : undefined}
        <div className="pack">
          <span className="title">
            <b>어떤 케어가 필요하신가요?</b> <br /> 필요한 케어를 바로
            {agent === "mb" ? <br /> : ""}
            확인해보세요
          </span>
          <span className="sub">
            아래 키워드를 클릭하면 자세한 내용을 확인할 수 있습니다
          </span>
          {agent !== "mb" ? (
            <img
              src="/assets/main/section4.png"
              srcSet="/assets/main/section4@2x.png 2x , /assets/main/section4@3x.png 3x"
              alt=""
            />
          ) : undefined}
          <section className="nav-wrapper">
            {section4_layout.map(({ title, sub, btn }, idx) => {
              return (
                <div
                  key={idx}
                  className="card"
                  style={
                    idx === 1
                      ? {
                          borderTop: "solid 1px var(--very-light-pink)",
                          borderBottom: "solid 1px var(--very-light-pink)",
                        }
                      : undefined
                  }
                >
                  <div className="title">
                    {" "}
                    <b>{title}</b>
                  </div>
                  <div className="sub">{sub}</div>
                  <section className="btn-wrapper">
                    {btn.map(({ title, link, type, width, tablet }, idx) => {
                      return (
                        <Link
                          key={idx}
                          to={{
                            pathname: link,
                          }}
                          state={idx + 1}
                          style={{
                            width:
                              agent === "pc"
                                ? width
                                : agent === "tablet"
                                ? tablet
                                : "",
                            marginLeft: `${
                              agent === "pc"
                                ? idx !== 0
                                  ? "12px"
                                  : 0
                                : agent === "tablet"
                                ? idx !== 0
                                  ? "9px"
                                  : 0
                                : 0
                            }`,
                          }}
                        >
                          {title}
                        </Link>
                      );
                    })}
                  </section>
                </div>
              );
            })}
          </section>
        </div>
      </div>
      <div className="section5">
        <div className="pack">
          <div className="content">
            {agent !== "mb" ? (
              <img
                className="main-img"
                src="/assets/main/section5.png"
                srcSet="/assets/main/section5@2x.png 2x , /assets/main/section5@3x.png 3x"
                alt=""
              />
            ) : undefined}
            <div className="title">
              에버퓨리는 <br /> <b>케어 전문가를 양성합니다</b>
            </div>

            {agent === "mb" ? (
              <img
                className="main-img"
                src="/assets/main/section5.png"
                srcSet="/assets/main/section5@2x.png 2x , /assets/main/section5@3x.png 3x"
                alt=""
              />
            ) : undefined}
            <div className="sub">
              에버퓨리는 직영 교육장을 통해{" "}
              {agent === "mb" ? <br /> : undefined} ‘케어 전문가’를 양성합니다.{" "}
              <br /> 체계적인 교육을 통해 에버퓨리만의{" "}
              {agent === "mb" ? <br /> : undefined} 친환경 청소와 시공 기술을
              전수합니다.
            </div>
            <button
              className="btn"
              onClick={() => {
                navigate("/partner", { state: "main" });
              }}
            >
              <span>창업교육 및 파트너 제휴</span>
              <img src="/assets/common/rightarrow.svg" alt="이동" />
            </button>
          </div>
        </div>
      </div>
      <Sponsor type="main" agent={agent} />
      <Tel agent={agent} />
      <Store agent={agent} />
    </main>
  );
}

export default Main;

const section3_layout = [
  {
    title: "가전제품케어",
    sub: `생활 속에서 사용되는 만큼 중요한 우리집 가전 제품
가전제품에 전문가의 꼼꼼한 케어가 필요하다면`,
    img: "section3-1",
    link: "/product",
    category: [
      { type: "aircon", title: "에어컨" },
      { type: "washer", title: "세탁기" },
      { type: "hood", title: "주방후드" },
      { type: "airclean", title: "공기청정기" },
    ],
  },
  {
    title: "홈클리닝",
    sub: `우리집 공간부터 매트리스, 실외기 등 집안 곳곳
세심하고 꼼꼼한 케어가 필요하다면`,
    img: "section3-2",
    link: "/homeclean",
    category: [
      { type: "house", title: "거주공간" },
      { type: "matt", title: "매트리스" },
      { type: "block", title: "줄눈시공" },
      { type: "bird", title: "실외비둘기" },
      { type: "bug", title: "해충.방역" },
    ],
  },
  {
    title: "비즈니스케어",
    sub: `관공서, 학교, 기업 등의 사무공간
및 건물 관리가 필요하다면`,
    img: "section3-3",
    link: "/business",
    category: [
      { type: "building", title: "건물관리" },
      { type: "air", title: "공기케어" },
      { type: "filter", title: "필터교체" },
      { type: "safe", title: "방역.소독" },
    ],
  },
];
const section4_layout = [
  {
    title: "가전제품케어",
    sub: "우리집 가전제품 케어가 필요하다면",
    btn: [
      {
        title: "에어컨 분해청소",
        link: "/product",
        type: "aircon",
        width: "179px",
        tablet: "125px",
      },
      {
        title: "세탁기 분해청소",
        link: "/product",
        type: "wash",
        width: "179px",
        tablet: "125px",
      },
      {
        title: "주방후드 분해세척",
        link: "/product",
        type: "hood",
        width: "179px",
        tablet: "129px",
      },
      {
        title: "공기청정기 케어",
        link: "/product",
        type: "air",
        width: "180px",
        tablet: "125px",
      },
      {
        title: "공기정화장치 필터교체",
        link: "/product",
        type: "filter",
        width: "221px",
        tablet: "164px",
      },
    ],
  },
  {
    title: "홈클리닝",
    sub: `방 뿐만 아니라 매트리스, 실외기 등
세심한 케어가 필요하다면`,
    btn: [
      {
        title: "주거공간청소",
        link: "/homeclean",
        type: "house",
        width: "179px",
        tablet: "125px",
      },
      {
        title: "매트리스케어",
        link: "/homeclean",
        type: "matt",
        width: "179px",
        tablet: "129px",
      },
      {
        title: "줄눈시공",
        link: "/homeclean",
        type: "block",
        width: "151px",
        tablet: "125px",
      },
      {
        title: "실외기 비둘기 퇴치",
        link: "/homeclean",
        type: "bird",
        width: "211px",
        tablet: "160px",
      },
      {
        title: "해충·방역 서비스",
        link: "/homeclean",
        type: "bug",
        width: "221px",
        tablet: "129px",
      },
    ],
  },
  {
    title: "비즈니스케어",
    sub: `관공서, 학교, 기업 등의
사무공간 및 건물 관리가 필요하다면`,
    btn: [
      {
        title: "건물관리",
        link: "/business",
        type: "bulding",
        width: "179px",
        tablet: "164px",
      },
      {
        title: "공기질케어",
        link: "/business",
        type: "air",
        width: "179px",
        tablet: "164px",
      },
      {
        title: "공기정화장치 필터교체",
        link: "/business",
        type: "filter",
        width: "242px",
        tablet: "164px",
      },
      {
        title: "방역·소독 서비스",
        link: "/business",
        type: "safe",
        width: "186px",
        tablet: "164px",
      },
    ],
  },
];
