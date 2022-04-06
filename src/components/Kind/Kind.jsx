import React from "react";
import "./css/index.css";
function Kind({ type, arr }) {
  return (
    <div className={`kind ${type}kind`}>
      <div className="pack">
        {type === "hood" || type === "filter" ? (
          <b className="category">EVERPURI SERVICE</b>
        ) : undefined}
        <div className="title">
          {type === "hood" ? (
            <>
              <b>다양한 형태의 주방후드 분해세척</b>이 가능하며 <br />
              <b>완전분해를 원칙</b>으로 합니다
            </>
          ) : type === "filter" ? (
            <b>에버퓨리가 제공하는 서비스</b>
          ) : (
            <>
              {" "}
              <b>다양한 형태의 세탁기 분해세척</b>이 가능합니다
            </>
          )}
        </div>
        <div className="list">
          {arr.map((item, idx) => {
            return (
              <div key={idx} className="card">
                <img
                  className="circle"
                  src={`/assets/product/kind-${type}${idx + 1}.png`}
                  srcSet={`/assets/product/kind-${type}${
                    idx + 1
                  }@2x.png 2x , /assets/product/kind-${type}${
                    idx + 1
                  }@3x.png 3x`}
                  alt=""
                />
                <div className="title">{item}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Kind;