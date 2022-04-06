import React from "react";
import "./css/index.css";
function CareOne({ type, cleanArr, nav }) {
  return (
    <div className={`careone ${type}clean ${nav}care`}>
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
          ) : type === "hood" ? (
            <b>주방후드 분해세척</b>
          ) : type === "air" ? (
            <b>공기청정기 분해케어</b>
          ) : type === "filter" ? (
            <b>공기정화장치 필터 교체</b>
          ) : type === "mat" ? (
            <b>4중 완벽 소독ㆍ살균 서비스</b>
          ) : (
            <></>
          )}
        </div>
        <div className="sub">
          {type === "aircon" ? (
            <>
              16단계로 진행되는 완전 분해 케어로 새제품처럼 <br /> 깨끗하게
              보이지 않는 곳까지 아주 완벽하게 케어합니다
            </>
          ) : type === "wash" ? (
            <>6단계로 진행되는 완전 분해 케어로 완벽하게 케어합니다</>
          ) : type === "air" ? (
            "6단계로 진행되는 완전 분해 케어로 완벽하게 케어합니다"
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
