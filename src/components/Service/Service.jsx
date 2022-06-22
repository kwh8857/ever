import React from "react";
import "./css/index.css";
function Service({ type, agent }) {
  return (
    <div className={`service ${type}spack`}>
      <div className="pack">
        <div className="category">EVERPURI SERVICE</div>
        <div className="title">
          서비스에 대해 인정받고{agent === "mb" ? <br /> : undefined}
          <b>
            {" "}
            끝까지 책임지는 {agent !== "mb" ? <br /> : undefined} 청소·시공
            {agent === "mb" ? <br /> : undefined}전문업체
          </b>
          는 에버퓨리
        </div>
        <div className={`list ${type}service`}>
          <div className="card">
            <span className="number">01</span>
            <span className="title">
              <b>완전분해를 원칙</b>으로 합니다
            </span>
          </div>
          <div className="line" />
          <div className="card">
            <span className="number">02</span>
            <span className="title">
              {type === "aircon" ? (
                <>
                  <b>검증된 핀세척제 웰존</b>
                  {agent !== "pc" ? <br /> : ""} (환경부 고시 안전검사 완료제품,
                  {agent === "mb" ? <br /> : undefined}
                  냉동협회 공인약품)만을 사용합니다
                </>
              ) : type === "wash" ? (
                <>
                  <b>친환경 세정제만을</b> 고집합니다
                </>
              ) : undefined}
            </span>
          </div>
          <div className="line" />
          <div className="card">
            <span className="number">03</span>
            <span className="title">
              {type === "aircon" ? (
                <>
                  핀코팅을 통해{" "}
                  <b>
                    제품의{agent === "mb" ? <br /> : undefined} 수명을
                    늘려줍니다
                  </b>
                </>
              ) : (
                <>
                  <b>무상 A/S기간은 3개월</b>입니다
                </>
              )}
            </span>
          </div>
          <div className="line" />
          <div className="card">
            <span className="number">04</span>
            <span className="title">
              {type === "aircon" ? (
                <>
                  <b>무상 A/S기간은 3개월</b>입니다
                </>
              ) : (
                <>
                  <b>고압세척·고온스팀 살균</b>
                  {agent === "mb" ? <br /> : undefined} 시스템으로 진행됩니다.
                </>
              )}
            </span>
          </div>
          {type === "aircon" ? (
            <>
              <div className="line" />
              <div className="card">
                <span className="number">05</span>
                <span className="title">
                  <b>
                    고압세척·고온스팀1차 살균
                    {agent === "mb" ? <br /> : undefined} ·UV자외선 2차 살균
                  </b>{" "}
                  시스템으로{agent === "mb" ? <br /> : undefined} 진행됩니다.
                </span>
              </div>
            </>
          ) : undefined}
        </div>
      </div>
    </div>
  );
}

export default Service;
