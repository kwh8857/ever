import React from "react";
import { Link } from "react-router-dom";
import "./css/index.css";
function Footer({ agent }) {
  return (
    <footer>
      <div className="pack">
        <div className="left">
          <img
            src="/assets/footer/logo.png"
            srcSet="/assets/footer/logo@2x.png 2x , /assets/footer/logo@3x.png 3x"
            alt="everpuri"
          />
          <span>
            (주)에버퓨리 | Tel 1522-4396 | Fax 053-965-0708 <br /> 대구광역시
            동구 동내로 76 한국메디벤처센터 210호, 211호
          </span>
        </div>
        {agent === "pc" ? (
          <div className="right">
            {layout.map(({ title, list, right }, idx) => {
              return (
                <div key={idx} className="box" style={{ marginRight: right }}>
                  <b className="category">{title}</b>
                  <div className="list">
                    {list.map(({ link, title }, idx) => {
                      return (
                        <Link to={{ pathname: link }} state={idx + 1} key={idx}>
                          {title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
      </div>
    </footer>
  );
}

export default Footer;

const layout = [
  {
    title: "ABOUT US",
    right: "28px",
    list: [
      {
        title: "CEO 인사말",
        link: "/about",
      },
      {
        title: "회사소개",
        link: "/about",
      },
    ],
  },
  {
    title: "가전제품케어",
    right: "24px",
    list: [
      {
        title: "에어컨 분해청소",
        link: "/product",
      },
      {
        title: "세탁기 분해청소",
        link: "/product",
      },
      {
        title: "주방후드 분해세척",
        link: "/product",
      },
      {
        title: "공기청정기 케어",
        link: "/product",
      },
      {
        title: "공기정화장치 필터 교체",
        link: "/product",
      },
    ],
  },
  {
    title: "홈클리닝",
    right: "23px",
    list: [
      {
        title: "주거공간청소",
        link: "/homeclean",
      },
      {
        title: "매트리스 케어",
        link: "/homeclean",
      },
      {
        title: "줄눈 시공",
        link: "/homeclean",
      },
      {
        title: "실외기 비둘기 퇴치",
        link: "/homeclean",
      },
      {
        title: "해충·방역 서비스",
        link: "/homeclean",
      },
    ],
  },
  {
    title: "비즈니스케어",
    right: "3px",
    list: [
      {
        title: "건물관리",
        link: "/business",
      },
      {
        title: "공기질케어",
        link: "/business",
      },
      {
        title: "공기정화장치 필터 교체",
        link: "/business",
      },
      {
        title: "방역·소독 서비스",
        link: "/business",
      },
    ],
  },
  {
    title: "창업 교육 및 파트너 제휴",
    right: "0",
    list: [
      {
        title: "창업 교육",
        link: "/partner",
      },
      {
        title: "파트너 제휴",
        link: "/partner",
      },
    ],
  },
];
