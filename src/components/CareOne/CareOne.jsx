import React from "react";
import "./css/index.css";
function CareOne({ type, cleanArr }) {
  return (
    <div className={`careone ${type}clean`}>
      <div className="pack">
        <div className="category">EVERPURI CARE 01</div>
        <div className="title">
          보이지 않는 곳까지
          <b className="circle"> 완벽 케어</b>
          하는 <br />
          {type === "aircon" ? (
            <b> 16단계 완전분해케어</b>
          ) : type === "wash" ? (
            <b> 6단계 완전분해케어</b>
          ) : undefined}
        </div>
        <div className="sub">
          {type === "aircon" ? (
            <>
              16단계로 진행되는 완전 분해 케어로 새제품처럼 <br /> 깨끗하게
              보이지 않는 곳까지 아주 완벽하게 케어합니다
            </>
          ) : type === "wash" ? (
            <>6단계로 진행되는 완전 분해 케어로 완벽하게 케어합니다</>
          ) : undefined}
        </div>
        <div className="list">
          {cleanArr.map(({ img, title }, idx) => {
            return (
              <div key={idx} className="card">
                <div className="number">{idx + 1}</div>
                <img
                  src={`/assets/product/${img}.png`}
                  srcSet={`/assets/product/${img}@2x.png 2x, /assets/product/${img}@3x.png 3x`}
                  alt=""
                />
                <div className="title">{title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CareOne;
