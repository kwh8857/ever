import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Section2({ agent, handleScroll }) {
  const navigate = useNavigate();
  const dom = useRef(null);
  useEffect(() => {
    let observer;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(
        (e) => {
          handleScroll(e, dom);
        },
        {
          threshold: 0.2,
          root: null,
          rootMargin: "0px",
        }
      );
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [dom, handleScroll]);
  return (
    <div className="section2">
      <div className="pack" ref={dom}>
        {agent === "mb" ? (
          <img
            className="right"
            src="/assets/main/section2.png"
            srcSet="/assets/main/section2@2x.png 2x , /assets/main/section2@3x.png 3x"
            alt=""
          />
        ) : undefined}
        <div className="left">
          <span className="title">
            <b>
              EVER PURI <br /> CARE SERVICE
            </b>
          </span>
          <span className="sub">
            <b>관공서·기업·학교·의료복지시설 건물관리</b>와 <br />
            <b>에어컨 유지 보수 관리</b>를 책임지고 맡고 있으며, <br />
            <b>가정집 홈케어 서비스를 전문</b>으로 <br /> 고객감동을 실현할 것을
            약속드립니다.
          </span>
          <button
            onClick={() => {
              navigate("/about", { state: 2 });
            }}
          >
            <span>회사소개</span>
            <img src="/assets/common/rightarrow.svg" alt="바로가기" />
          </button>
        </div>
        {agent !== "mb" ? (
          <img
            className="right"
            src="/assets/main/section2.png"
            srcSet="/assets/main/section2@2x.png 2x , /assets/main/section2@3x.png 3x"
            alt=""
          />
        ) : undefined}
      </div>
    </div>
  );
}

export default Section2;
