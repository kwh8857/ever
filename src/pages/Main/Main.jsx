import React from "react";
import { Link } from "react-router-dom";
import Sponsor from "../../components/Sponsor/Sponsor";
import Store from "../../components/Store/Store";
import "./css/index.css";
function Main() {
  return (
    <main className="main">
      <div className="section1">
        <div className="pack">
          <b>고객의 환경과 건강을</b> <br /> 생각하는 마음으로 <br />
          최선을 다하는 기업 <br />
          <b> 에버퓨리</b>
        </div>
      </div>
      <div className="section2">
        <div className="pack">
          <div className="left">
            <span className="title">
              <b>
                EVER PURI <br /> CARE SERVICE
              </b>
            </span>
            <span className="sub">
              <b>관공서·기업·학교·의료복지시설 건물관리</b>와 <br />
              <b>에어컨 유지 보수 관리</b>를 책임지고 맡고 있으며, <br />
              <b>가정집 홈케어 서비스를 전문</b>으로 <br /> 고객감동을 실현할
              것을 약속드립니다.
            </span>
            <button>
              <span>회사소개</span>
              <img src="/assets/common/rightarrow.svg" alt="바로가기" />
            </button>
          </div>
          <img
            className="right"
            src="/assets/main/section2.png"
            srcSet="/assets/main/section2@2x.png 2x , /assets/main/section2@3x.png 3x"
            alt=""
          />
        </div>
      </div>
      <div className="section3">
        <div className="pack">
          <span className="title">
            <b>다양한 환경에 맞는</b> <br /> 에버퓨리를 만나보세요
          </span>
          <section className="wrapper">
            {section3_layout.map(({ title, sub, img, link, category }, idx) => {
              return (
                <div key={idx} className="card">
                  <img
                    src={`/assets/main/${img}.png`}
                    srcSet={`/assets/main/${img}@2x.png 2x , /assets/main/${img}@3x.png 3x`}
                    alt=""
                  />
                  <div className="content">
                    <span className="title">
                      <b>{title}</b>
                    </span>
                    <span className="sub">{sub}</span>
                    <div
                      className="category"
                      style={{
                        gridTemplateColumns: `repeat(${category.length},60px)`,
                      }}
                    >
                      {category.map(({ type, title }, idx) => {
                        return (
                          <div key={idx}>
                            <img src={`/assets/main/${type}.svg`} alt={type} />
                            <span>{title}</span>
                          </div>
                        );
                      })}
                    </div>
                    <a href={link} className="btn">
                      <span>자세히보기</span>
                      <img src="/assets/common/rightarrow.svg" alt="이동" />
                    </a>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </div>
      <div className="section4">
        <div className="pack">
          <span className="title">
            <b>어떤 케어가 필요하신가요?</b> <br /> 필요한 케어를 바로
            확인해보세요
          </span>
          <span className="sub">
            아래 키워드를 클릭하면 자세한 내용을 확인할 수 있습니다
          </span>
          <img
            src="/assets/main/section4.png"
            srcSet="/assets/main/section4@2x.png 2x , /assets/main/section4@3x.png 3x"
            alt=""
          />
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
                    {btn.map(({ title, link, type, width }, idx) => {
                      return (
                        <Link
                          key={idx}
                          to={{ pathname: link }}
                          style={{
                            width: width,
                            marginLeft: `${idx !== 0 ? "12px" : 0}`,
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
            <img
              className="main-img"
              src="/assets/main/section5.png"
              srcSet="/assets/main/section5@2x.png 2x , /assets/main/section5@3x.png 3x"
              alt=""
            />
            <div className="title">
              에버퓨리는 <br /> <b>케어 전문가를 양성합니다</b>
            </div>
            <div className="sub">
              에버퓨리는 직영 교육장을 통해 ‘케어 전문가’를 양성합니다. <br />{" "}
              체계적인 교육을 통해 에버퓨리만의 친환경 청소와 시공 기술을
              전수합니다.
            </div>
            <button className="btn">
              <span>창업교육 및 파트너 제휴</span>
              <img src="/assets/common/rightarrow.svg" alt="이동" />
            </button>
          </div>
        </div>
      </div>
      <Sponsor type="main" />
      <div className="section6">
        <div className="pack">
          <img
            src="/assets/main/everpuri.png"
            srcSet="/assets/main/everpuri@2x.png 2x , /assets/main/everpuri@3x.png 3x"
            alt=""
          />
        </div>
        <div className="bottom">
          <div className="pack">
            <div className="title">
              <b>깨끗한 환경</b>으로 <b>건강한 내일</b>을 약속하는 <br />{" "}
              에버퓨리가 여러분의 건강을 지켜드립니다
            </div>
            <div className="call-wrapper">
              <div className="tel-wrapper">
                <img src="/assets/main/tel.svg" alt="전화" />
                <div className="tel">1522-4396</div>
              </div>
              <div className="address">
                대구광역시 동구 동내로 76 한국메디벤처센터 210호, 211호
              </div>
            </div>
            <img
              className="background"
              src="/assets/main/section6.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Store />
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
    link: "/",
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
    link: "/",
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
    link: "/",
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
        link: "/",
        type: "aircon",
        width: "179px",
      },
      {
        title: "세탁기 분해청소",
        link: "/",
        type: "washer",
        width: "179px",
      },
      {
        title: "주방후드 분해세척",
        link: "/",
        type: "hood",
        width: "179px",
      },
      {
        title: "공기청정기 케어",
        link: "/",
        type: "aircon",
        width: "180px",
      },
      {
        title: "공기정화장치 필터교체",
        link: "/",
        type: "aircon",
        width: "221px",
      },
    ],
  },
  {
    title: "홈클리닝",
    sub: "방 뿐만 아니라 매트리스, 실외기 등 세심한 케어가 필요하다면",
    btn: [
      {
        title: "거주공간청소",
        link: "/",
        type: "house",
        width: "179px",
      },
      {
        title: "매트리스케어",
        link: "/",
        type: "matt",
        width: "179px",
      },
      {
        title: "줄눈시공",
        link: "/",
        type: "block",
        width: "151px",
      },
      {
        title: "실외기 비둘기 퇴치",
        link: "/",
        type: "bird",
        width: "211px",
      },
      {
        title: "해충·방역 서비스",
        link: "/",
        type: "bug",
        width: "221px",
      },
    ],
  },
  {
    title: "비즈니스케어",
    sub: "관공서, 학교, 기업 등의 사무공간 및 건물 관리가 필요하다면",
    btn: [
      {
        title: "건물관리",
        link: "/",
        type: "bulding",
        width: "179px",
      },
      {
        title: "공기질케어",
        link: "/",
        type: "air",
        width: "179px",
      },
      {
        title: "공기정화장치 필터교체",
        link: "/",
        type: "filter",
        width: "242px",
      },
      {
        title: "방역·소독 서비스",
        link: "/",
        type: "safe",
        width: "186px",
      },
    ],
  },
];
