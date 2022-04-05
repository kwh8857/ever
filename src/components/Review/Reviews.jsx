import React from "react";
import "./css/index.css";
function Reviews({ title, sub, arr, type }) {
  return (
    <div className="review">
      <div className="back" />
      <div className="pack">
        <div className="title">
          <img src="/assets/common/mint-quotes.svg" alt="" className="left" />
          <b>{title}</b>
          <img src="/assets/common/mint-quotes.svg" alt="" className="right" />
        </div>
        <div className="sub">
          {sub}
          <b>에버퓨리가 하면 다릅니다!</b>
        </div>
        <div className="list" style={{ gridTemplateColumns: `repeat(4,1fr)` }}>
          {arr.map((item, idx) => {
            return (
              <img
                src={`/assets/product/${type}-review${idx + 1}.png`}
                srcSet={`/assets/product/${type}-review${
                  idx + 1
                }@2x.png 2x,/assets/product/${type}-review${idx + 1}@3x.png 3x`}
                key={idx}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
