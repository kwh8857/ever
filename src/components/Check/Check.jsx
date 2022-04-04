import React from "react";
import "./css/index.css";
function Check({ type, circleArr, checkArr }) {
  return (
    <div className="check-section">
      <div className="back" />
      <div className="pack">
        <div className="title">
          에어컨 관리를 하지 않았을 때 <br />
          <b>이런 문제가 발생합니다!</b>
        </div>
        <div
          className="circle-wrapper"
          style={{ gridTemplateColumns: `repeat(${circleArr.length},148px)` }}
        >
          {circleArr.map(({ img, title }, idx) => {
            return (
              <div key={idx} className="circle">
                <img
                  src={`/assets/product/${img}.png`}
                  srcSet={`/assets/product/${img}@2x.png 2x,/assets/product/${img}@3x.png 3x`}
                  alt=""
                />
                <div className="title">{title}</div>
              </div>
            );
          })}
        </div>
        <div className="content">
          {type === "aircon" ? (
            <>
              <b>필터 청소로만 해결되지 않는 </b>에어컨
            </>
          ) : type === "wash" ? (
            <>
              <b>집에서 관리해도 해결되지 않는 세탁기</b>
            </>
          ) : undefined}{" "}
          <br /> 아래 내용을 체크해 보세요!
        </div>
        <div className={`check-box ${type}`}>
          <div className="title">Check Point</div>
          <div className="check">
            {checkArr.map((item, idx) => {
              return (
                <img src="/assets/common/check.svg" alt="check" key={idx} />
              );
            })}
          </div>
          <div className="content">
            {type === "aircon" ? (
              <>
                에어컨 가동시
                <b>
                  <span> 불쾌한 냄새</span>
                  <span className="back" />
                </b>
                가 날 때 <br /> 에어컨 가동시
                <b>
                  <span> 두통이나 기침</span>
                  <span className="back" />
                </b>
                이 나올 때 <br /> 에어컨 바람의
                <b>
                  <span> 세기가 약해</span>
                  <span className="back" />
                </b>
                졌을 때 <br /> 전년도에 비해
                <b>
                  <span> 전기요금이 많이</span>
                  <span className="back" />
                </b>
                나올 때 <br /> 에어컨
                <b>
                  <span> 청소를 한 지 1년</span>
                  <span className="back" />
                </b>
                이 지났을 때
              </>
            ) : type === "wash" ? (
              <>
                세탁물에 검은
                <b>
                  <span>이물질이 보이거나 묻어 나올 때</span>
                  <span className="back" />
                </b>
                <br />
                세탁을 해도
                <b>
                  <span> 상쾌하지 않을 때</span>
                  <span className="back" />
                </b>
                <br />
                세탁기 내부 또는
                <b>
                  <span> 세탁물에서 퀴퀴한 냄새가 날 때</span>
                  <span className="back" />
                </b>
              </>
            ) : undefined}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Check;
